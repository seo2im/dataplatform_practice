import { Request, Response, NextFunction } from 'express'
import { addUsers, getUsers } from '../model';

export const getusers: [string, any] = [
  '/users',
  async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.query;
    try {
      const user = await getUsers(name as string);
      if (user.length === 0) next(new Error('No user'));
      else res.json(user[0]);
    } catch(err) {
      next(new Error(err as string));
    }
  }
];
export const postusers: [string, any] = [
  '/users',
  async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;
    
    try {
      await addUsers(name);
      res.json({ msg: 'OK' });
    } catch(err: any) {
      next(new Error(err.toString()));
    }
  }
];
