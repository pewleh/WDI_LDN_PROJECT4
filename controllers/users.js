const User = require('../models/user');


function userIndex(req, res, next){
  User
    .find()
  // .populate('user')
    .then(users => res.json(users))
    .catch(next);
}
function showRoute(req, res, next) {
  // console.log('showRoute',req.params.id);
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(next);
}
// POST MVP
// function updateRoute(req, res, next) {
//   User.findById(req.params.id)
//     .then(user => Object.assign(user, req.body))
//     .then(user => user.save())
//     .then(user => res.json(user))
//     .catch(next);
// }



module.exports = {
  show: showRoute,
  // update: updateRoute,
  index: userIndex
};
