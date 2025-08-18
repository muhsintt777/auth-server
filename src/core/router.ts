import { Router } from 'express';
import { authRouter } from 'apis/auth/auth-routes';

const router = Router();

router.use('/auth', authRouter);

export { router as appRouter };
