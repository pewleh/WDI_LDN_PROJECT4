const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Artwork = require('../models/artwork');
const Challenge = require('../models/challenge');
const User = require('../models/user');

const { dbURI } = require('../config/environment');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();
  Challenge.create([{
    name: 'Girl with a Pearl Earing',
    image: 'http://www.vivisiena.com/wp-content/uploads/2015/01/Vermeer_Ragazza-con-orecchino-di-perla.jpg',
    description: 'For this weeks challenge, create your own rendition of "Girl with a Pearl Earing", originally by Johannes Vermeer, 1665. You\'re welcome to use a maximum of 3 different materials this round.',
    startTime: '12pm (GMT) 9th April',
    endTime: '12am (GMT) 16th April'
  }, {
    name: 'The old Guitarist',
    image: 'https://lakeimagesweb.artic.edu/iiif/2/869a7319-306e-ca90-1732-cb614199f3df/full/!800,800/0/default.jpg',
    description: 'For this weeks challenge, create your own rendition of "The Old Guitarist", originally by Pablo Picasso, 1904. In honour of Picasso\'s blue period, choose a colour scheme and encapture the emotions that relate most appropriately. You\'re welcome to use a maximum of 3 different materials this round.',
    startTime: '12pm (GMT) 16th April',
    endTime: '12am (GMT) 23rd April'
  }])
    .then(challenges => console.log(`${challenges.length} challenges created!`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());


  User.create([{
    username: 'pewleh',
    admin: true,
    email: 'pewlehh@gmail.com',
    password: 'AdminPass',
    passwordConfirmation: 'AdminPass'
  }]);

  Artwork.create([{
    name: 'Whatever they want',
    image: 'https://i.pinimg.com/originals/c8/db/63/c8db635833916f6b41188ad716425471.jpg',
    description: 'I was particularly inspired by the use of lighting Vermeer chose in his own piece. I decided I should have a little play around too! First time working in oils!',
    challenge: {type: '', ref: 'Challenge'}

  }]);

});
