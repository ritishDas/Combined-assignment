import type { Request, Response, NextFunction } from 'express';
import { returnJson2 } from '../dto.js';
import jwt from 'jsonwebtoken';

export const authCheck = (req: Request, res: Response, next: NextFunction) => {
  try {
    const accessToken = req.cookies.token;
    if (!accessToken) return returnJson2(res, 401, false, 'unauthenticated');

    const verification = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET!);
    if (!verification) return returnJson2(res, 401, false, 'invalid token');

    req.user = verification;

    next();
  }
  catch (err) { next(err) }
}
