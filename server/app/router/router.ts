import express from 'express';
import { getdatas, postdatas } from './datas';
import { getusers, postusers } from './users';


const router = express.Router();
router.use((req, res, next) => {
  next();
})
router.get(...getusers);
router.post(...postusers);
router.get(...getdatas);
router.post(...postdatas);

export default router;
