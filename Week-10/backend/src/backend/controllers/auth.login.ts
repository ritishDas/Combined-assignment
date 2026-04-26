import type { Request, Response } from 'express';
import { jwt, success, z } from 'zod';
import { asyncHandler } from '../libs/asyncHandler.js';
import { userModel } from '../models/schema.js';
import bcrypt from 'bcrypt';
import { returnJson, returnJson2 } from '../dto.js';
import { sendMail } from '../libs/sendMain.js';
import { generateAccessToken } from '../libs/jwt.js';

const zUserLogin = z.object({ email: z.string().email(), password: z.string() });
export const loginController = asyncHandler(async (req: Request, res: Response) => {
  const userInput = req.body;
  let inputs;

  try {
    inputs = zUserLogin.parse(userInput);
  }
  catch (err) {
    return returnJson2(res, 400, false, 'Invalid input')
  }

  const user = await userModel.findOne({ email: inputs.email });

  if (!user) return returnJson2(res, 404, false, 'User Not found');

  const comparison = await bcrypt.compare(inputs.password, user.password);
  console.log({ comparison })
  if (!comparison) return returnJson2(res, 401, false, 'Incorrect Password');

  const accessToken = generateAccessToken({ name: user.name, email: user.email });

  return res
    .cookie('token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000,
      path: '/',
    })
    .status(200)
    .json(
      returnJson(true, 'User Logged In', {
        name: user.name,
        email: user.email,
      })
    );
});
