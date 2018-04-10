const mongoose = require('mongoose');

const artworkSchema = new mongoose.Schema({
  name: { type: String, required: 'You must provide a name'},
  image: { type: String, pattern: /^https?:\/\/.+/},
  description: { type: String, required: true },
  mediums: { type: String},
  likes: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
  challenge: {type: mongoose.Schema.ObjectId, ref: 'Challenge'}


});

module.exports = mongoose.model('Artwork', artworkSchema);
