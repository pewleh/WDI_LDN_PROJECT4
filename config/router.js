const router = require('express').Router();

const artworks = require('../controllers/artworks');
const challenges = require('../controllers/challenges');

const users = require('../controllers/users');

const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

router.route('/artworks')
  .get(artworks.index)
  .post(secureRoute, artworks.create);

router.route('/artworks/:id')
  .get(artworks.show)
  .put( artworks.update)
  .delete(artworks.delete);

router.route('/challenges')
  .get(challenges.index);

router.route('/challenges/:id')
  .get(challenges.show);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/users')
  .get(users.index);

router.route('/users/:id')
  .get(users.show);

//anything else.
router.route('/*')
  .all((req, res) => res.status(404).json({ message: 'Not found' }));

module.exports = router;
