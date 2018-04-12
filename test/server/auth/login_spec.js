/* global api, describe, it, expect, beforeEach */

const User = require('../../../models/user');
const userData = {
  username: 'test',
  image: 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg',
  admin: false,
  email: 'test@test.com',
  password: 'test',
  passwordConfirmation: 'test'
};

describe('POST /login', () => {
  beforeEach(done => {
    User.remove({})
      .then(() => User.create(userData))
      .then(() => done());
  });

  it('should return a token', done => {
    api
      .post('/api/login')
      .send(userData)
      .end((err, res) => {
        expect(res.body.token.split('.').length).to.eq(3);
        done();
      });
  });
  it('should return a response of 401 if the password is incorrect', done => {
    const incorrectData = { email: 'test@test.com', password: 'incorrect' };
    api
      .post('/api/login')
      .send(incorrectData)
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });

  it('should return a responce of 401 if the user doesn\'t exist', done => {
    const incorrectData = { email: 'incorrect@test.com', password: 'test' };

    api
      .post('/api/login')
      .send(incorrectData)
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });

});
