import type { Request, Response } from 'express';
import { z } from 'zod';
import { asyncHandler } from '../libs/asyncHandler.js';
import { returnJson2 } from '../dto.js';
import { householdModel } from '../models/schema.js';

const houseHoldZod = z.object({ name: z.string() });
export const createHousehold = asyncHandler(async (req: Request, res: Response) => {

  const userInput = req.body;
  const user = req.user;
  let input;
  try {
    input = houseHoldZod.parse(userInput);
  }
  catch (err) {
    return returnJson2(res, 400, false, 'invalid input');
  }

  let randomNumber;
  while (1) {
    randomNumber = Math.floor(Math.random() * 900000) + 100000;
    const houseHold = await householdModel.findOne({ inviteCode: randomNumber });

    if (!houseHold) { break; }
  }

  // const household = await householdModel.create({ name: input.name, inviteCode: randomNumber, });


})
