import express from 'express';
import { createUser, listAllUsers, fetchUser, updateUser, deleteUser } from '../../db/controllers/student.controller.mjs';

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
userRouter.post('/users', createUser);

/**
 * GET :: /users
 * @description Lists all Users from the database.
 */
userRouter.get('/users', listAllUsers);

/**
 * GET :: /users/:userId
 * @description Fetches a single User from the database.
 */
userRouter.get('/users/:userId', fetchUser);

/**
 * PATCH :: /users/:userId
 * @description Updates a single User from the database.
 */
userRouter.put('/users/:userId', updateUser);

/**
 * DELETE :: /users/:userId
 * @description Deletes a single User from the database.
 */
userRouter.delete('/users/:userId', deleteUser);

export default userRouter;