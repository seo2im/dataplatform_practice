import express from 'express';
import { getdatas, postdatas } from './datas';
import { getusers, postusers } from './users';
import { client } from '../celery';

const router = express.Router();
router.use((req, res, next) => {
  next();
})
router.get('/test', (req, res) => {
  client.sendTask("task.add", [1, 2])
      .get(10000).then((data: any) => res.json({
        data
      }));
})

router.get(...getusers);
router.post(...postusers);
router.get(...getdatas);
router.post(...postdatas);

export default router;
