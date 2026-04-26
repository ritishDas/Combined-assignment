import { success, z } from 'zod';
import { asyncHandler } from '../libs/asyncHandler.js';
import { userModel } from '../models/schema.js';
import bcrypt from 'bcrypt';
import { returnJson } from '../dto.js';
const zUserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string()
});
export const registerController = asyncHandler(async (req, res) => {
    const { name, email, password } = zUserSchema.parse(req.body);
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
        res.status(400).json(returnJson(false, 'User Already Exist'));
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
        name,
        email,
        password: hashedPassword
    });
    return res.status(201).json(returnJson(true, 'User Registered Successfully', { name: user.name, email: user.email }));
});
//# sourceMappingURL=auth.controller.js.map