const mongoose = require('mongoose');

const artworkSchema = new mongoose.Schema({
  name: { type: String, required: 'You must provide a name'},
  image: { type: String, pattern: /^https?:\/\/.+/, required: 'Copy the link address of the image you would like to upload.'},
  description: { type: String, required: 'Write a little about your process!' },
  media: [{ type: String, required: 'Select the mediums used.'}],
  likes: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
  createdBy: {type: mongoose.Schema.ObjectId, ref: 'User'},
  challenge: {type: mongoose.Schema.ObjectId, ref: 'Challenge'}
});

module.exports = mongoose.model('Artwork', artworkSchema);
