import type { Request, Response } from 'express';
import { jwt, success, z } from 'zod';
import { asyncHandler } from '../libs/asyncHandler.js';
import { userModel } from '../models/schema.js';
import bcrypt from 'bcrypt';
import { returnJson, returnJson2 } from '../dto.js';
import { sendMail } from '../libs/sendMain.js';
import { generateAccessToken } from '../libs/jwt.js';

const zUserRegister = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string()
});



export const registerController = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password } = zUserRegister.parse(req.body);

  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    return res.status(400).json(returnJson(false, 'User Already Exist'));
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const uniqueStr = await crypto.randomUUID();
  const user = await userModel.create({
    name,
    email,
    password: hashedPassword,
    verificationString: uniqueStr,
    verificationExpiry: new Date(Date.now() + 5000 * 60)
  });

  await sendMail({ to: email, subject: 'Email Verification', body: `${process.env.BASE_NAME}/api/auth/verification/${user._id}/${uniqueStr}` })

  return res.status(201).json(returnJson(true, 'User registered successfully please check your email for verification', { name: user.name, email: user.email }));
});

export const verifyEmailController = asyncHandler(async (req: Request<{ id: string, str: string }>, res: Response) => {
  const { id, str } = req.params;

  const user = await userModel.findById(id);

  if (!user) {
    return res.status(404).json(returnJson(false, 'User not found'));
  }

  if (user.verificationExpiry && (user.verificationExpiry) < new Date(Date.now()))
    return res.status(401).json(returnJson(false, 'Verification String Expired Please try again'))

  if (user.verificationString === str) {
    user.verified = true;
    await user.save();

    return res.status(200).json(returnJson(true, 'Email Verified Successfully'));
  }

  return res.status(400).json(returnJson(false, 'Invalid verification string'));
});

export const resendMailController = asyncHandler(async (req: Request<{ email: string }>, res: Response) => {
  const { email } = req.params;

  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(404).json(returnJson(false, 'User Not Found'));
  }

  if (user.verified) {
    return res.status(400).json(returnJson(false, 'Email already verified'));
  }

  if (user.emailResendCount >= 5) {
    return res.status(429).json(returnJson(false, 'Too many requests'));
  }

  const uniqueStr = crypto.randomUUID();

  user.verificationString = uniqueStr;
  user.verificationExpiry = new Date(Date.now() + 5 * 60 * 1000);
  user.emailResendCount += 1;

  await user.save();

  const base = process.env.BASE_NAME;
  const link = `${base}/api/auth/verification/${user._id}/${uniqueStr}`;

  try {
    await sendMail({
      to: email,
      subject: 'Email Verification',
      body: link
    });
  } catch {
    return res.status(500).json(returnJson(false, 'Failed to send email'));
  }

  return res.status(200).json(returnJson(true, 'Email sent successfully'));
});


