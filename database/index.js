const mongoose = require('mongoose');
const faker = require('faker');
mongoose.connect('mongodb://localhost/opentable');

let restaurantInfoSchema = mongoose.Schema({
  restaurant_id: Number,
  name: String,
  stars: Number,
  reviews: Number,
  price: Number,
  cuisine: Array,
  description: String,
  style: String,
  tags: {
    main: Array,
    additional:Array
  },
  hours: String,
  phone: String,
  website: String,
  payment: Array,
  dress: String,
  chef: String,
  catering: String,
  private_party: {
    facilities: String,
    contact: String,
  },
  location: {
    street: String,
    city: String,
    state: String,
    zip: String,
    neighborhood: String,
    parking_details: String,
    public_transit: String,
    cross_street: String,
  },
  entertainment: String,
  specials: String,
  private_dining: String
});

const cuisines = ['American', 'Italian', 'Steakhouse', 'Seafood', 'French', 'Indian', 'Mexican', 'Japanese', 'Chinese', 'German', 'Spanish', 'Fusion/Eclectic', 'Barbecue', 'Greek', 'Grill', 'Comfort Food', 'Turkish', 'International', 'Thai', 'Tex-Mex', 'Bistro', 'Bar/Lounge', 'Californian'];
const styles = ['Casual Elegant', 'Casual Dining', 'Fine Dining', 'Elegant Dining'];
const mainTags = ['Fit For Foodies', 'Neighborhood Gem', 'Special Occasion', 'Tasting Menu', 'Quiet Conversation', 'Creative Cuisine', 'Casual', 'Romantic', 'Local Ingredients', 'Notable Wine List', 'Authentic', 'Fun', 'Vibrant Bar Scene', 'Good For A Date'];
const additionalTags = ['Bar Dining', 'Bar/Lounge', 'Beer', 'Cocktails', 'Corkage Fee', 'Counter Seating', 'Farm to Table', 'Fireplace', 'Full Bar', 'Gluten-free Menu', 'Happy Hour', 'Late Night', 'Non-Smoking', 'Outdoor dining', 'Patio/Outdoor Dining', 'Weekend Brunch', 'Wheelchair Access', 'Wine'];
const payments = ['AMEX', 'Discover', 'MasterCard', 'Visa'];
const dressStyles = ['Casual Dress', 'Business Casual', 'Smart Casual', 'Jacket Preferred'];
const neighborhoods = ['Parkton', 'Bowdle', 'Ilchester', 'Lanesville', 'Pin Oak Acres', 'Lennox', 'Metcalfe', 'Lynden', 'New Cumberland', 'New Troy', 'Mapleton'];
const percentBool = (number) => {
  if (Math.random() < number/100) {
    return true;
  } else {
    return false;
  }
}

const RestaurantInfo = function() {
  this.name = faker.commerce.productMaterial() + ' ' + faker.commerce.product();
  this.stars = faker.finance.amount(2, 5, 1);
  this.reviews = faker.random.number({min: 10, max: 5000});
  this.price = faker.random.number({min: 1, max: 3});
  this.cuisine = faker.helpers.shuffle(cuisines).slice(0,3);
  this.description = faker.lorem.paragraphs(faker.random.number({min: 1, max: 3}));
  this.style = faker.random.arrayElement(styles);
  this.tags = {
    main: faker.helpers.shuffle(mainTags).slice(0,3),
    additional: faker.helpers.shuffle(additionalTags).slice(0, faker.random.number({min: 1, max: 10}))
  }
  this.hours;
  this.phone = faker.phone.phoneNumberFormat(1);
  this.website = faker.internet.url();
  this.payment = payments.slice(Math.floor(Math.random() * (payments.length - 1)), payments.length);
  this.dress = faker.random.arrayElement(dressStyles);
  let locStreet = faker.address.streetAddress();
  let locCity = faker.address.city();
  let locState = faker.address.stateAbbr();
  let locZIP = faker.address.zipCode();
  let locNeighborhood = faker.random.arrayElement(neighborhoods);
  let crossStreet = faker.address.streetName();
  this.location = {
    street: locStreet,
    city: locCity,
    state: locState,
    zip: locZIP,
    neighborhood: locNeighborhood,
    cross_street: crossStreet
  };

  if (percentBool(60)) {
    this.location.parking_details = faker.lorem.paragraph();
  }

  if (percentBool(30)) {
    this.location.public_transit = faker.lorem.paragraph();
  }

  if (percentBool(80)) {
    this.chef = faker.name.firstName() + ' ' + faker.name.lastName();
  }

  if (percentBool(50)) {
    this.catering = faker.lorem.paragraph();
  }

  if (percentBool(40)) {
    this.private_party = {
      facilities: faker.lorem.paragraph(),
      contact: faker.name.findName() + ': ' + faker.phone.phoneNumberFormat(1)
    }
  }

  if (percentBool(10)) {
    this.entertainment = faker.lorem.paragraph();
  }

  if (percentBool(10)) {
    this.specials = faker.lorem.paragraph();
  }

  if (percentBool(10)) {
    this.privateDining = faker.lorem.paragraph();
  }
};

const createRecords = (num) => {
  let arr = [];
  for (let i = 0; i < num; i++) {
    let newData = new RestaurantInfo();
    arr.push(newData);
  }
  let Restaurant = mongoose.model('Restaurant', restaurantInfoSchema);
  Restaurant.create(arr, (err, data) => {
    // Callback required
  });
};

module.exports.createRecords = createRecords;