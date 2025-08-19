import { Router } from 'express';

import { AuthMiddleware } from 'middlewares/auth-middleware';
import { asyncHandler } from 'utils/async-handler';

import { AuthController } from './auth-controller';

const router = Router();

router.post('/login', asyncHandler(AuthController.login));
router.post('/refresh', asyncHandler(AuthController.refreshToken));
router.post(
  '/logout',
  AuthMiddleware.verifyToken,
  asyncHandler(AuthController.logout),
);

export { router as authRouter };
