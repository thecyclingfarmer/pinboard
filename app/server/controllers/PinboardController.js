import PinboardModel from '../models/PinboardModel';
export default {
  get(req, res) {
    res.json(PinboardModel);
  },

  post(req, res) {
    console.log(req);
    res.json(PinboardModel);
  },
};
