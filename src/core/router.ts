import { Router } from 'express';

import { authRouter } from 'apis/auth/auth-routes';
import { userRouter } from 'apis/users/user-routes';

const router = Router();

router.use('/auth', authRouter);
router.use('/user', userRouter);

export { router as appRouter };
