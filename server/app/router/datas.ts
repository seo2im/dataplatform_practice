import { Request, Response, NextFunction } from 'express'
import { uploadMiddleware } from '../middleware';
import { getDatas, addDatas } from '../model';

export const getdatas: [string, any] = [
  '/datas',
  async (req: Request, res: Response, next: NextFunction) => {
    const { userid, name } = req.query;
    try {
      const { path } = await getDatas(parseInt(userid as string), name as string);
      /* have to change file data into some format */
      res.sendFile(path as string);
    } catch(err) {
      next(new Error(err as string));
    }
  }
]
export const postdatas: [string, any, any] = [
  '/datas',
  uploadMiddleware.single('file'),
  async (req: Request, res: Response, next: NextFunction) => {
    const { userid } = req.query;
    const { filename } = req.body;
    try {
      addDatas(parseInt(userid as string), filename as string, `/public/${filename}`);
      res.json({ msg: 'OK' });
    } catch(err) {
      next(new Error(err as string));
    }
  }
]
