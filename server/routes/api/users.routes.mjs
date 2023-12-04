import express from "express";
import {
  createUser,
  listAllUsers,
  fetchUser,
  updateUser,
  deleteUser,
} from "./../../controllers/student.controller.mjs";
import { protect, restrictTo } from "../../controllers/auth.controller.mjs";

const userRouter = express.Router();

/**
 * @module routes/api/users
 * @description ExpressJS router for /api/users routes.
 *
 * TODO: This is a template where you will do back-end routes here.
 */

/**
 * POST :: /users
 * @description Creates a new User in the database.
 */
userRouter.post("/users", createUser);

/**
 * GET :: /users
 * @description Lists all Users from the database.
 * @auth Only accessible to authenticated users.
 */
userRouter.get("/users", protect, restrictTo("administrator"), listAllUsers);

/**
 * GET :: /users/:userId
 * @description Fetches a single User from the database.
 */
userRouter.get("/users/:userId", fetchUser);

/**
 * PATCH :: /users/:userId
 * @description Updates a single User from the database.
 */
userRouter.patch("/users/:userId", updateUser);

/**
 * DELETE :: /users/:userId
 * @description Deletes a single User from the database.
 * @auth Only accessible to authenticated users.
 */
userRouter.delete(
  "/users/:userId",
  protect,
  restrictTo("administrator"),
  deleteUser
);

export default userRouter;
