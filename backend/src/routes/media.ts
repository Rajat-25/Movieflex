import { Request, Response, Router } from 'express';
import authMiddleware from '../middleware/authMiddleware';
import Media from '../schemas/media';
import { code, getFilteredData, getReqData } from '../utils';
import { CustomRequest, GenApiType } from '../utils/types';

const router = Router();

router.get(
  '/bookmark/read',
  authMiddleware,
  async (req: CustomRequest, res) => {
    const data = await Media.find({
      userId: req.userId,
    });

    if (data) {
      return res.status(code.success).json({
        msg: code.reqOkMsg,
        data,
      });
    } else {
      return res.status(code.server).json({ msg: code.servMsg });
    }
  }
);

router.delete(
  '/bookmark/del',
  authMiddleware,
  async (req: CustomRequest, res: Response) => {
    const data = await Media.deleteOne({
      userId: req.userId,
      id: req.body.id,
    });

    if (data) {
      return res.status(code.success).json({ msg: 'bookmark Removed' });
    } else {
      return res.status(code.server).json({ msg: code.servMsg });
    }
  }
);

router.post(
  '/bookmark/add',
  authMiddleware,
  async (req: CustomRequest, res: Response) => {
    const result = await Media.findOne(req.body);

    if (!result) {
      const data = await Media.create({
        userId: req.userId,
        ...req.body,
      });
      return res.status(code.success).json({ msg: 'bookmarked successfully' });
    } else {
      return res.status(code.server).json({ msg: code.servMsg });
    }
  }
);

router.get('/movie', authMiddleware, async (req: Request, res: Response) => {
  const obj = {
    method: 'GET',
    path: '/discover/movie',
    params: {
      include_adult: 'false',
      include_video: 'false',
      language: 'en-US',
      page: '1',
    },
  };

  const { results }: { results: GenApiType[] } = await getReqData(obj);

  const data = getFilteredData(results);

  if (results) {
    return res.status(code.success).json({
      msg: code.reqOkMsg,
      data,
    });
  } else {
    return res.status(code.server).json({ msg: code.servMsg });
  }
});

router.get('/tv', authMiddleware, async (req: Request, res: Response) => {
  const obj = {
    method: 'GET',
    path: '/discover/tv',
    params: {
      include_null_first_air_dates: 'false',
      language: 'en-US',
      page: '1',
    },
  };

  const { results }: { results: GenApiType[] } = await getReqData(obj);

  const data = getFilteredData(results);

  if (results) {
    return res.status(code.success).json({
      msg: code.reqOkMsg,
      data,
    });
  } else {
    return res.status(code.server).json({ msg: code.servMsg });
  }
});

router.get('/trending', authMiddleware, async (req: Request, res: Response) => {
  const obj = {
    method: 'GET',
    path: '/trending/all/day',
    params: { language: 'en-US' },
  };

  const { results }: { results: GenApiType[] } = await getReqData(obj);

  const data = getFilteredData(results);

  if (results) {
    return res.status(code.success).json({
      msg: code.reqOkMsg,
      data,
    });
  } else {
    return res.status(code.server).json({ msg: code.servMsg });
  }
});

export default router;
