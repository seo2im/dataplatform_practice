import express from 'express';
import { getdatas, postdatas } from './datas';
import { getusers, postusers } from './users';
import { client } from '../celery';

const router = express.Router();
router.use((req, res, next) => {
  next();
})

router.get('/', (req, res) => {
  res.send('Hello Rest Server')
})

router.get(...getusers);
router.post(...postusers);
router.get(...getdatas);
router.post(...postdatas);

export default router;
