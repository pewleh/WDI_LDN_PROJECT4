const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
  name: { type: String, required: 'You must provide a name'},
  image: { type: String, pattern: /^https?:\/\/.+/},
  description: { type: String, required: true },
  likes: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
  challenge: {type: mongoose.Schema.ObjectId, ref: 'Challenge'},
  startTime: {type: Number, required: true},
  endTime: {type: Number, required: true}
});

module.exports = mongoose.model('Challenge', challengeSchema);
