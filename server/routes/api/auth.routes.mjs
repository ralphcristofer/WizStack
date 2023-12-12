import express from "express";
import {
  signUp,
  signIn,
  signOut,
  forgotPassword,
  protect,
  restrictTo,
  resetPassword,
  updatePassword,
  restrictTo,
  protect,
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

authRouter.patch("/auth/resetPassword/:token", resetPassword);
//authRouter.patch("/auth/resetPassword", resetPassword);
authRouter.patch("/auth/updateMyPassword", protect, updatePassword);

/**
 * GET :: /auth/signout
 * @description Signs out a user.
 */
authRouter.get("/auth/signout", signOut);

export default authRouter;
