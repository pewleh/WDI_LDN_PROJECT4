const Challenge = require('../models/challenge');

function indexRoute(req, res, next) {
  return Challenge.find()
    .then(challenges => res.json(challenges))
    .catch(next);
}

function showRoute(req, res, next) {
  return Challenge.findById(req.params.id)
    .then(challenge => res.json(challenge))
    .catch(next);
}


module.exports = {
  index: indexRoute,
  show: showRoute
};
