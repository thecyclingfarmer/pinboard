import request from 'superagent';
import Promise from 'promise';

export default {
  getPinboard() {
    return new Promise((resolve, reject) => {
      request.get('/pinboard').end((error, response) => {
        if (response.body) {
          resolve(response.body);
        } else {
          reject('Error');
        }
      });
    });
  },

  savePinboardItem(item) {
    return new Promise((resolve, reject) => {
      request.post('/pinboard').send(item).end((error, response) => {
        if (response.body) {
          resolve(response.body);
        } else {
          reject('Error');
        }
      });
    });
  },
};
