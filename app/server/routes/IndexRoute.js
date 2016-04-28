import express from 'express';
import Index from '../controllers/IndexController';

let router = express.Router();
router.get('/', Index.get);

export default router;
