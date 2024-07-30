import express from 'express';
import { loginUser, registerUser } from '../controllers/authControllers.js';
export const authRouter = express.Router();

authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);
authRouter.post('/send/email');
