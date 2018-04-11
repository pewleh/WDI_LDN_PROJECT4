const Artwork = require('../models/artwork');

function indexRoute(req, res, next) {
  return Artwork.find()
    .populate('challenge')
    .then(artworks => res.json(artworks))
    .catch(next);
}

function createRoute(req, res, next) {
  req.body.createdBy = req.currentUser;
  return Artwork.create(req.body)
    .then(artwork => res.status(201).json(artwork))
    .catch(next);
}

function showRoute(req, res, next) {
  return Artwork.findById(req.params.id)
    .populate('createdBy')
    .then(artwork => res.json(artwork))
    .catch(next);
}

function updateRoute(req, res, next) {
  return Artwork.findById(req.params.id)
    .then(artwork => Object.assign(artwork, req.body))
    .then(artwork => artwork.save())
    .then(artwork => res.json(artwork))
    .catch(next);
}

function deleteRoute(req, res, next) {
  return Artwork.findById(req.params.id)
    .then(artwork => artwork.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
};
