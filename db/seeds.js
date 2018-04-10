const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Artwork = require('../models/artwork');
const Challenge = require('../models/challenge');
const User = require('../models/user');

const { dbURI } = require('../config/environment');

let challenges = null;

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
  },{
    name: 'The Doge\'s Palace',
    image: 'https://d1lfxha3ugu3d4.cloudfront.net/images/opencollection/objects/size4/20.634_SL1.jpg',
    description: 'For this weeks challenge embrace the changes in weather and sun movements to manipulate the lighting and reflections of the Rouen Cathedral, originally painted by Claude Monet in 1908. Use a maxiumum of 2 materials this round.',
    startTime: '12pm (GMT) 23rd April',
    endTime: '12am (GMT) 30th April'
  },{
    name: 'Rue Halevy',
    image: 'http://www.inalco.fr/sites/default/files/styles/visuel-large/public/assets/images/web_recherche_predications_mars15.jpg?itok=WJu54fUq',
    description: 'In this weeks challenge, use Gustav Caillebottes "Rue Halevy", 1878, to create your own impression of Londons Regent Street. Use a careful selection of mediums to present mood.',
    startTime: '12pm (GMT) 30th April',
    endTime: '12am (GMT) 7th May'
  },{
    name: 'Western Motel',
    image: 'https://www.edwardhopper.net/images/paintings/western-motel.jpg',
    description: 'For this weeks challenge use watercolours to recreate Edward Hoppers 1957 piece "Western Motel" in a different era. Consider how the use of watercolour changes the mood from the original.',
    startTime: '12pm (GMT) 7th May',
    endTime: '12am (GMT) 14th May'
  },{
    name: 'A Woman in the Sun',
    image: 'http://www.paintinghere.org/UploadPic/Edward%20Hopper/big/A%20Woman%20in%20the%20Sun.jpg',
    description: 'For this weeks challenge use your perception of the 80\'s to add theme and colour to Edward Hoppers "A woman in the Sun". The more experimental the better! Maximum of 3 mediums.',
    startTime: '12pm (GMT) 14th May',
    endTime: '12am (GMT) 21st May'
  },{
    name: 'Hyeres Square',
    image: 'https://i.pinimg.com/originals/d7/d5/0e/d7d50ed44de5a67be9c4c1358b0609e0.jpg',
    description: 'In this weeks challenge, use acrylic paints to recreate Raoul Dufy\'s "Hyeres Square", 1927, to create a vintage impressionist piece. ',
    startTime: '12pm (GMT) 21st May',
    endTime: '12am (GMT) 28th May'
  }])
    .then(data => {
      console.log(`${data.length} data created!`);
      challenges = data;
    })
    .then(() => User.create([{
      username: 'pewleh',
      admin: true,
      email: 'pewlehh@gmail.com',
      password: 'AdminPass',
      passwordConfirmation: 'AdminPass'
    }]))
    .then(users => console.log(`${users.length} users created!`))
    .then(() => Artwork.create([{
      name: 'Test Title',
      image: 'https://i.pinimg.com/originals/c8/db/63/c8db635833916f6b41188ad716425471.jpg',
      description: 'I was particularly inspired by the use of lighting Vermeer chose in his own piece. I decided I should have a little play around too! First time working in oils!',
      challenge: challenges[0]
    }]))
    .then(artworks => console.log(`${artworks.length} artworks created!`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());

});
