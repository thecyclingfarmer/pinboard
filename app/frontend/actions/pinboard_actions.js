import Reflux from 'reflux';
import PinboardApi from '../api/pinboard_api';

let PinboardActions = Reflux.createActions({
  'loadPinboard': {
    children: ['completed', 'failed'],
  },

  'savePinboardItem': {},
});

PinboardActions.loadPinboard.listen((args) => {
  PinboardApi.getPinboard()
    .then(PinboardActions.loadPinboard.completed)
    .catch(PinboardActions.loadPinboard.failed);
});

PinboardActions.savePinboardItem.listen((args) => {
  PinboardApi.savePinboardItem(args)
    .then(PinboardActions.loadPinboard.completed)
    .catch(PinboardActions.loadPinboard.failed);
});

export default PinboardActions;
