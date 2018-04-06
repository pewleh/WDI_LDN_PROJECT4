const router = require('express').Router();

const artworks = require('../controllers/artworks');
const challenges = require('../controllers/challenges');

const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');


router.route('/')
  .get(artworks.home);
  

router.route('/gallery')
  .get(artworks.index)
  .post(secureRoute, artworks.create);

router.route('/artworks/:id')
  .get(artworks.show)
  .put(secureRoute, artworks.update)
  .delete(secureRoute, artworks.delete);

router.route('/challenge')
  .get(challenges.index);
router.route('/challenge/:id')
  .get(challenges.show)
  .put(secureRoute, challenges.create);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

//anything else.
router.route('/*')
  .all((req, res) => res.status(404).json({ message: 'Not found' }));

module.exports = router;
