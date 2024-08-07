import { Router } from 'express';
import TokenController from '../controllers/TokenController.js';

const router = new Router();

router.post('/', TokenController.create);

export default router;
