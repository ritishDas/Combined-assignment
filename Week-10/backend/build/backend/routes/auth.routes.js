import { Router } from "express";
import { registerController } from "../controllers/auth.controller.js";
const router = Router();
router.route('/')
    .get((req, res) => { res.send('hello world Tesk Ok ✅'); });
router.route('/register').post(registerController);
export default router;
//# sourceMappingURL=auth.routes.js.map