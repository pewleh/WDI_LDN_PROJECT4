/* global api, describe, it, expect, beforeEach */

const User = require('../../../models/challenge');

let users;


const userData = {
  name: 'test',
  image: 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg',
  description: 'very cool',
  startTime: '00 (GMT) day month',
  endTime: '00 (GMT) day month'
};

//Index Route --->
describe('GET /users', () => {
  beforeEach(done => {
    User.remove({})
      .then(() => User.create(userData))
      .then(() => done());
  });

  it('should return response of 200', done => {
    api
      .get('/api/users')
      .send(userData)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });
});
//Show route --->
describe('GET /api/users/artwork._id', () => {
  beforeEach(done => {
    User.remove({})
      .then(() => User.create(userData))
      .then(userData => users = userData)
      .then(() => done());
  });

  it('should return response of 200', done => {
    api
      .get(`/api/users/${users._id}`)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });
});
