import type { Response } from "express";

export function returnJson<T>(success: boolean, message: string, data?: T) {
  return { success, message, data };
}

export function returnJson2<T>(res: Response, code: number, success: boolean, message: string, data?: T) {

  return res.status(code).json({ success, message, data });

}
