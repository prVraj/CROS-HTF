import { Router } from "express";
import { registerUser } from "../controllers/user.controllers.js";
import { verifyCookie } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/create").post(registerUser);

export default router;
