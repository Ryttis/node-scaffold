import express from 'express';
import { PromptsController } from '../controllers/prompts.controller.js';
import { UsersController } from '../controllers/users.controller.js';
import { verifyToken } from '../middlewares/auth.middleware.js';

const router = express.Router();

/* ---------- USERS ---------- */
router.post('/users/register', UsersController.register);

/* ---------- PROMPTS ---------- */
router.post('/prompts', PromptsController.create);
router.get('/prompts', PromptsController.list);

export default router;
