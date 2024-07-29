import { Router } from 'express';
import mediaRouter from './media';
import userRouter from './user';

const router = Router();

router.use('/user', userRouter);
router.use('/media', mediaRouter);

export default router;
