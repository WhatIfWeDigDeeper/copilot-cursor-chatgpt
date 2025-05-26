import express from 'express';
import { login, signup } from '../controllers/userController.js';

const router = express.Router();

// POST /users/signup
router.post('/signup', signup);

// POST /users/login
router.post('/login', login);

export default router;
