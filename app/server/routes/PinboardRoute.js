import express from 'express';
import Pinboard from '../controllers/PinboardController';

let router = express.Router();
router.get('/pinboard', Pinboard.get);
router.post('/pinboard', Pinboard.post);

export default router;
