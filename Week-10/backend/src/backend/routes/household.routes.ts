import { Router } from "express";
import { createHousehold } from "../controllers/household.js";
import { authCheck } from "../middleware/auth.js";

const router: Router = Router();

router.route('/create').post(authCheck, createHousehold);

export default router;
