import jwt from 'jsonwebtoken';

export function generateAccessToken<T>(payload: T) {
  return jwt.sign({ payload }, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: '1d',
  });
}
