import { Request, Response, Router } from 'express';
import User from '../schemas/user';
import { code, getToken } from '../utils';
import { signInBody, signUpBody } from '../utils/types';

const router = Router();

router.post('/signup', async (req: Request, res: Response) => {
  const userData = req.body;

  try {
    const { success } = signUpBody.safeParse(userData);

    if (success) {
      const isExist = await User.findOne({
        email: userData.email,
      });

      if (isExist) {
        return res.status(code.cred).json({ msg: 'User already exist' });
      }

      const dbData = await User.create(userData);

      const { firstName, lastName, email, _id } = dbData;

      const authToken = getToken(dbData._id);

      if (dbData) {
        res.cookie('authToken', `Bearer ${authToken}`, { maxAge: 3600000 });
        return res.status(code.success).json({
          msg: 'User Signed Up Successfully',
          user: { firstName, lastName, email, _id },
        });
      }
    } else {
      return res.status(code.cred).json({ msg: code.credMsg });
    }
  } catch (err) {
    return res.status(code.server).json({ msg: code.servMsg });
  }
});

router.post('/signin', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const { success } = signInBody.safeParse(req.body);

    const dbData = await User.findOne({ email, password });

    if (dbData && success) {
      const { firstName, lastName, email, _id } = dbData;
      const authToken = getToken(dbData._id);

      res.cookie('authToken', `Bearer ${authToken}`, { maxAge: 3600000 });

      return res.status(code.success).json({
        msg: 'User Signed in Successfully',
        user: { firstName, lastName, email, _id },
      });
    } else {
      return res.status(code.cred).json({ msg: code.credMsg });
    }
  } catch (err) {
    return res.status(code.server).json({ msg: code.servMsg });
  }
});

export default router;
