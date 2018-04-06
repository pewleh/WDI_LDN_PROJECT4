const mongoose = require('mongoose');

const artworkSchema = new mongoose.Schema({
  name: { type: String, required: 'You must provide a name'},
  image: { type: String, pattern: /^https?:\/\/.+/},
  description: { type: String, required: true },
  likes: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
  challenge: {type: '', ref: 'Challenge'}


});

module.exports = mongoose.model('Artwork', artworkSchema);