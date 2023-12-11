import express from "express";
import {
  signUp,
  signIn,
  signOut,
  forgotPassword,
  protect,
  restrictTo,
} from "./../../controllers/auth.controller.mjs";

const authRouter = express.Router();

/**
 * POST :: /auth/signin
 * @description Signs in a user.
 */
authRouter.post("/auth/signup", signUp);

authRouter.post("/auth/signin", signIn);

authRouter.post("/auth/forgotPassword", forgotPassword);
//authRouter.post("/auth/resetPassword");

/**
 * GET :: /auth/signout
 * @description Signs out a user.
 */
authRouter.get("/auth/signout", signOut);

export default authRouter;
