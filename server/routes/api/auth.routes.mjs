import express from 'express';
import { signIn, signOut } from '../../db/controllers/auth.controller.mjs';

const authRouter = express.Router();

/**
 * POST :: /auth/signin
 * @description Signs in a user.
 */
authRouter.post('/auth/signin', signIn);

/**
 * GET :: /auth/signout
 * @description Signs out a user.
 */
authRouter.get('/auth/signout', signOut);

export default authRouter;