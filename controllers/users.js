const User = require('../models/user');


function userIndex(req, res, next){
  User
    .find()
    .then(users => res.json(users))
    .catch(next);
}
function showRoute(req, res, next) {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(next);
}




module.exports = {
  show: showRoute,
  index: userIndex
};
