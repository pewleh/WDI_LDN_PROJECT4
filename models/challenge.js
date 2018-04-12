const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
  name: { type: String, required: 'You must provide a name'},
  image: { type: String, pattern: /^https?:\/\/.+/, required: 'Copy the link address of the image you would like to upload.'},
  description: { type: String, required: true },
  likes: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
  challenge: {type: mongoose.Schema.ObjectId, ref: 'Challenge'},
  startTime: {type: String, required: true},
  endTime: {type: String, required: true}
});

module.exports = mongoose.model('Challenge', challengeSchema);
