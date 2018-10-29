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
    additional: Array
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

module.exports.restaurantInfoSchema = restaurantInfoSchema;
