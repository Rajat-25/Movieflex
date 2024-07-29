import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { code } from '../utils';
import { CustomRequest, PayloadType } from '../utils/types';

const authMiddleware = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies['authToken'] as string;

  if (!token || !token.startsWith('Bearer')) {
    return res.status(code.cred).json({ msg: code.authMsg });
  }

  try {
    const orgToken = token.split('Bearer ')[1];

    const { userId } = jwt.verify(
      orgToken,
      process.env.JWT_SECRET!
    ) as PayloadType;

    req.userId = userId;

    if (userId) next();
  } catch (err) {
    return res.status(code.cred).json({ msg: code.authMsg });
  }
};

export default authMiddleware;
