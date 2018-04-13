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

describe('POST /register', () => {
  beforeEach(done => {
    User.remove({})
      .then(() => done());
  });

  it('should return a token', done => {
    api
      .post('/api/register')
      .send(userData)
      .end((err, res) => {
        expect(res.body.token.split('.').length).to.eq(3);
        done();
      });
  });

  it('should return a flash message', done => {
    api
      .post('/api/register')
      .send(userData)
      .end((err, res) => {
        expect(res.body.message).to.eq('You\'re signed up!');
        done();
      });
  });

  it('should return a response of 422 if the passwords don\'t match', done => {
    const incorrectData = Object.assign({}, userData, { password: 'incorrect' });
    api
      .post('/api/register')
      .send(incorrectData)
      .end((err, res) => {
        expect(res.status).to.eq(422);
        done();
      });
  });
});
