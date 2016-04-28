import Reflux from 'reflux';
import _ from 'lodash';
import PinboardActions from '../actions/pinboard_actions';

let PinboardStore = Reflux.createStore({

  listenables: PinboardActions,

  init() {
    this.data = {};
  },

  get() {
    return this.data;
  },

  getById(id) {
    return _.find(this.data.pinboard.items, { id: id });
  },

  onLoadPinboard() {
    this.data = {};
  },

  onLoadPinboardCompleted(res) {
    this.data.pinboard = res;
    this.trigger(this.data);
  },

  onLoadPinboardFailed() {
    console.log('error');
  },

});

export default PinboardStore;
