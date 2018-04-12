/* global api, describe, it, expect, beforeEach */

const Artwork = require('../../../models/artwork');
const User = require('../../../models/user');

const { secret } = require('../../../config/environment');
const jtoken = require('jsonwebtoken');
let token;
let artworks;

const userData = {
  username: 'test',
  image: 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg',
  admin: false,
  email: 'test@test.com',
  password: 'test',
  passwordConfirmation: 'test'
};

const artworksData = {
  name: 'test',
  image: 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg',
  description: 'very cool'
};
const updatedArtworksData = {
  name: 'test update',
  image: 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg',
  description: 'very cool, very testy.'
};
//Index Route --->
describe('GET /artworks', () => {
  beforeEach(done => {
    Artwork.remove({})
      .then(() => Artwork.create(artworksData))
      .then(() => done());
  });

  it('should return response of 200', done => {
    api
      .get('/api/artworks')
      .send(artworksData)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });
});

//Create Route --->
describe('POST/artworks', () => {
  beforeEach(done => {
    Promise.all([
      User.remove({}),
      Artwork.remove({})
    ])
      .then(() => User.create(userData))
      .then(user => {
        token = jtoken.sign({ sub: user._id }, secret, {expiresIn: '24h'});
      })
      .then(done);
  });

  it('should return response of 401 without a token', done => {
    api
      .post('/api/artworks')
      .send(artworksData)
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });

  it('should return a response of 201', done => {
    api
      .post('/api/artworks')
      .set('Authorization', `Bearer ${token}`)
      .send(artworksData)
      .end((err, res) => {
        expect(res.status).to.eq(201);
        done();
      });
  });
});

//Show route --->
describe('GET /api/artworks/artwork._id', () => {
  beforeEach(done => {
    Artwork.remove({})
      .then(() => Artwork.create(artworksData))
      .then(artworksData => artworks = artworksData)
      .then(() => done());
  });

  it('should return response of 200', done => {
    api
      .get(`/api/artworks/${artworks._id}`)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });
});

//Update Route --->

describe('PUT /api/artworks/artworks._id', () => {
  beforeEach(done => {
    Promise.all([
      User.remove({}),
      Artwork.remove({})
    ])
      .then(() => Artwork.create(artworksData))
      .then(artworksData => artworks = artworksData)
      .then(() => User.create(userData))
      .then(user => {
        token = jtoken.sign({ sub: user._id }, secret, {expiresIn: '24h'});
      })
      .then(done);
  });

  it('should return a response of 200', done => {
    api
      .put(`/api/artworks/${artworks._id}`)
      .set('Authorization', `Bearer ${token}`)
      .send(updatedArtworksData)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return a response of 401 without a token', done => {
    api
      .put(`/api/artworks/${artworks._id}`)
      .send(updatedArtworksData)
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });
});

//Delete route --->

describe('DELETE /api/artworks/artwork._id', () => {
  beforeEach(done => {
    Promise.all([
      User.remove({}),
      Artwork.remove({})
    ])
      .then(() => Artwork.create(artworksData))
      .then(artworksData => artworks = artworksData)
      .then(() => User.create(userData))
      .then(user => {
        token = jtoken.sign({ sub: user._id }, secret, {expiresIn: '24h'});
      })
      .then(done);
  });

  it('should return a response of 204', done => {
    api
      .delete(`/api/artworks/${artworks._id}`)
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.status).to.eq(204);
        done();
      });
  });
});
