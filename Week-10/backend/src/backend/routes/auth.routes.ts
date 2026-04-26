import { Router } from "express";
import { registerController, resendMailController, verifyEmailController } from "../controllers/auth.register.js";
import { loginController } from "../controllers/auth.login.js";

const router: Router = Router();

router.route('/')
  .get((req, res) => { res.send('hello world Tesk Ok ✅') })
  ;

router.route('/register').post(registerController);
router.route('/verification/:id/:str').get(verifyEmailController);
router.route('/resendmail/:email').get(resendMailController);


router.route('/login').post(loginController);

export default router;
