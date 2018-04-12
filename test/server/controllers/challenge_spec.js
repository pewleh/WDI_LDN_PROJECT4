/* global api, describe, it, expect, beforeEach */

const Challenge = require('../../../models/challenge');

let challenges;


const challengesData = {
  name: 'test',
  image: 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg',
  description: 'very cool',
  startTime: '00 (GMT) day month',
  endTime: '00 (GMT) day month'
};

//Index Route --->
describe('GET /challenges', () => {
  beforeEach(done => {
    Challenge.remove({})
      .then(() => Challenge.create(challengesData))
      .then(() => done());
  });

  it('should return response of 200', done => {
    api
      .get('/api/challenges')
      .send(challengesData)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });
});

//Show route --->
describe('GET /api/challenges/artwork._id', () => {
  beforeEach(done => {
    Challenge.remove({})
      .then(() => Challenge.create(challengesData))
      .then(challengesData => challenges = challengesData)
      .then(() => done());
  });

  it('should return response of 200', done => {
    api
      .get(`/api/challenges/${challenges._id}`)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });
});
