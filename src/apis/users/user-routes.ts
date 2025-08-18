import { Router } from 'express';

import { AuthMiddleware } from 'middlewares/auth-middleware';
import { asyncHandler } from 'utils/async-handler';

import { UserController } from './user-controller';

const router = Router();

router.post('/', asyncHandler(UserController.createUser));

router.get(
  '/currentuser',
  asyncHandler(AuthMiddleware.verifyToken),
  asyncHandler(UserController.getCurrentUser),
);

// router.get(
//   '/:id',
//   asyncHandler(AuthMiddleware.verifyToken),
//   asyncHandler(UserController.getUser),
// );

// router.delete(
//   '/:id',
//   asyncHandler(AuthMiddleware.verifyToken),
//   asyncHandler(UserController.deleteUser),
// );

export { router as userRouter };
