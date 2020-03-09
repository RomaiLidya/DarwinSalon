import express from 'express';

import AuthController from './controllers/AuthController';
import PasswordController from './controllers/PasswordController';
import UserController from './controllers/UserController';

const router = express.Router();

router.use('/', AuthController);
router.use('/', PasswordController);
router.use('/users', UserController);

export default router;
