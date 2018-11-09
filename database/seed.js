const faker = require('faker');
const db = require('./index.js');

let arr = [];
const cuisines = [
  'American', 'Italian', 'Steakhouse', 'Seafood',
  'French', 'Indian', 'Mexican', 'Japanese',
  'Chinese', 'German', 'Spanish', 'Fusion/Eclectic',
  'Barbecue', 'Greek', 'Grill', 'Comfort Food',
  'Turkish', 'International', 'Thai', 'Tex-Mex',
  'Bistro', 'Bar/Lounge', 'Californian',
];
const styles = ['Casual Elegant', 'Casual Dining', 'Fine Dining', 'Elegant Dining'];
const mainTags = [
  'Fit For Foodies', 'Neighborhood Gem', 'Special Occasion',
  'Tasting Menu', 'Quiet Conversation', 'Creative Cuisine',
  'Casual', 'Romantic', 'Local Ingredients',
  'Notable Wine List', 'Authentic', 'Fun',
  'Vibrant Bar Scene', 'Good For A Date',
];
const additionalTags = [
  'Bar Dining', 'Bar/Lounge', 'Beer', 'Cocktails',
  'Corkage Fee', 'Counter Seating', 'Farm to Table', 'Fireplace',
  'Full Bar', 'Gluten-free Menu', 'Happy Hour', 'Late Night',
  'Non-Smoking', 'Outdoor dining', 'Patio/Outdoor Dining', 'Weekend Brunch',
  'Wheelchair Access', 'Wine',
];
const payments = ['AMEX', 'Discover', 'MasterCard', 'Visa'];
const dressStyles = ['Casual Dress', 'Business Casual', 'Smart Casual', 'Jacket Preferred'];
const neighborhoods = [
  'Parkton', 'Bowdle', 'Ilchester',
  'Lanesville', 'Pin Oak Acres', 'Lennox',
  'Metcalfe', 'Lynden', 'New Cumberland',
  'New Troy', 'Mapleton',
];

const percentBool = (number) => {
  if (Math.random() < number / 100) {
    return true;
  }
  return false;
};

const RestaurantInfo = function RestaurantInfo() {
  const days = `Monday - ${faker.random.arrayElement(['Friday', 'Saturday', 'Sunday'])}`;
  const times = faker.random.arrayElement(['7 AM - ', '8 AM - ', '9 AM - ']) + faker.random.arrayElement(['7 PM', '8 PM', '9 PM']);
  const openHours = `${days} \n ${times}`;
  this.name = `${faker.commerce.productMaterial()} ${faker.commerce.product()}`;
  this.stars = faker.finance.amount(2, 5, 1);
  this.reviews = faker.random.number({ min: 10, max: 5000 });
  this.price = faker.random.number({ min: 1, max: 3 });
  this.cuisine = faker.helpers.shuffle(cuisines).slice(0, 3);
  this.description = faker.lorem.paragraphs(faker.random.number({ min: 1, max: 3 }));
  this.style = faker.random.arrayElement(styles);
  this.tags = {
    main: faker.helpers.shuffle(mainTags).slice(0, 3),
    additional: faker.helpers.shuffle(additionalTags)
      .slice(0, faker.random.number({ min: 1, max: 10 })),
  };
  this.hours = openHours;
  this.phone = faker.phone.phoneNumberFormat(1);
  this.website = faker.internet.url();
  this.payment = payments.slice(Math.floor(Math.random() * (payments.length - 1)), payments.length);
  this.dress = faker.random.arrayElement(dressStyles);
  const locStreet = faker.address.streetAddress();
  const locCity = faker.address.city();
  const locState = faker.address.stateAbbr();
  const locZIP = faker.address.zipCode();
  const locNeighborhood = faker.random.arrayElement(neighborhoods);
  const crossStreet = faker.address.streetName();
  const maps = [];
  for (let i = 1; i <= 4; i += 1) {
    maps.push(`https://s3-us-west-1.amazonaws.com/restaurant-info/googlemap${i}.png`);
  }
  const map = faker.random.arrayElement(maps);
  this.location = {
    map,
    street: locStreet,
    city: locCity,
    state: locState,
    zip: locZIP,
    neighborhood: locNeighborhood,
    cross_street: crossStreet,
  };

  if (percentBool(60)) {
    this.location.parking_details = faker.lorem.paragraph();
  }

  if (percentBool(30)) {
    this.location.public_transit = faker.lorem.paragraph();
  }

  if (percentBool(80)) {
    this.chef = `${faker.name.firstName()} ${faker.name.lastName()}`;
  }

  if (percentBool(50)) {
    this.catering = faker.lorem.paragraph();
  }

  if (percentBool(40)) {
    this.private_party = {
      facilities: faker.lorem.paragraph(),
      contact: `${faker.name.findName()}: ${faker.phone.phoneNumberFormat(1)}`,
    };
  }

  if (percentBool(10)) {
    this.entertainment = faker.lorem.paragraph();
  }

  if (percentBool(10)) {
    this.specials = faker.lorem.paragraph();
  }

  if (percentBool(10)) {
    this.private_dining = faker.lorem.paragraph();
  }
};

const createRecords = (num) => {
  arr = [];
  for (let i = 1; i < num; i += 1) {
    const newData = new RestaurantInfo();
    newData.restaurant_id = i;
    arr.push(newData);
  }
};

createRecords(100);
const Restaurant = db.model('Restaurant', db.restaurantInfoSchema);
Restaurant.create(arr, (err) => {
  if (err) {
    throw (err);
  }
  db.db.close();
});
