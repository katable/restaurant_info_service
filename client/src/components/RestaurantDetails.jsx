import React from 'react';
import PropTypes from 'prop-types';
import DetailItem from './DetailItem.jsx';

const { icons } = require('../img/icons.js');

const RestaurantDetails = (props) => {
  const { restaurantInfo } = props;
  const cuisine = restaurantInfo.cuisine.join(', ') || '';
  const style = restaurantInfo.style || '';
  const tags = {
    additional: restaurantInfo.tags.additional.join(', ') || '',
  };
  const hours = restaurantInfo.hours || '';
  const phone = restaurantInfo.phone || '';
  const website = restaurantInfo.website || '';
  const payment = restaurantInfo.payment.join(', ') || '';
  const dress = restaurantInfo.dress || '';
  const chef = restaurantInfo.chef || '';
  const catering = restaurantInfo.catering || '';
  const privateParty = {};
  if (restaurantInfo.private_party) {
    privateParty.facilities = restaurantInfo.private_party.facilities || '';
    privateParty.contact = restaurantInfo.private_party.contact || '';
  }
  const location = {
    map: restaurantInfo.location.map || '',
    street: restaurantInfo.location.street || '',
    city: restaurantInfo.location.city || '',
    state: restaurantInfo.location.state || '',
    zip: restaurantInfo.location.zip || '',
    neighborhood: restaurantInfo.location.neighborhood || '',
    parking_details: restaurantInfo.location.parking_details || '',
    public_transit: restaurantInfo.location.public_transit || '',
    cross_street: restaurantInfo.location.cross_street || '',
  };
  const address = `${location.street} ${location.city}, ${location.state} ${location.zip}`;
  const entertainment = restaurantInfo.entertainment || '';
  const specials = restaurantInfo.specials || '';
  const detailTitlesGroupLeft = ['Dining Style', 'Cuisines', 'Hours of operation', 'Phone number', 'Website', 'Payment options', 'Dress code', 'Executive chef', 'Private party facilities', 'Private party contact', 'Catering'];
  const iconsLeft = [
    icons.dining_style, icons.cuisine, icons.hours,
    icons.phone, icons.website, icons.payment,
    icons.dress, icons.chef, icons.private_dining,
    icons.contact, icons.catering,
  ];
  const detailsLeft = [
    style, cuisine, hours, phone,
    website, payment, dress, chef,
    privateParty.facilities, privateParty.contact, catering,
  ];

  const detailTitlesGroupRight = [
    'Address', 'Neighborhood', 'Cross street',
    'Parking details', 'Public transit', 'Entertainment',
    'Special events &amp; promotions', 'Additional',
  ];
  const iconsRight = [
    icons.location, icons.neighborhood, icons.cross_street,
    icons.parking, icons.public_transit, icons.entertainment,
    icons.special_events, icons.tag,
  ];
  const detailsRight = [
    address, location.neighborhood, location.cross_street,
    location.public_transit, location.parking_details, entertainment, specials,
    tags.additional,
  ];

  const leftItems = detailTitlesGroupLeft
    .map(
      (el, i) => (<DetailItem
        title={el}
        icon={iconsLeft[i]}
        details={detailsLeft[i]}
        key={Math.floor(Math.random() * 999999)}
      />
      ),
    );

  const rightItems = detailTitlesGroupRight.map(
    (el, i) => (
      <DetailItem
        title={el}
        icon={iconsRight[i]}
        details={detailsRight[i]}
        key={Math.floor(Math.random() * 999999)}
      />
    ),
  );

  return (
    <div className="restaurant-details">
      <div className="left-items">
        {leftItems}
      </div>
      <div className="right-items">
        <img src={location.map} alt="Map" className="map" />
        {rightItems}
      </div>
    </div>
  );
};

RestaurantDetails.propTypes = {
  restaurantInfo: PropTypes.shape({
    restaurant_id: PropTypes.number,
    name: PropTypes.string,
    stars: PropTypes.number,
    reviews: PropTypes.number,
    price: PropTypes.number,
    cuisine: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    style: PropTypes.string,
    tags: PropTypes.shape({
      main: PropTypes.arrayOf(PropTypes.string),
      additional: PropTypes.arrayOf(PropTypes.string),
    }),
    hours: PropTypes.string,
    phone: PropTypes.string,
    website: PropTypes.string,
    payment: PropTypes.arrayOf(PropTypes.string),
    dress: PropTypes.string,
    chef: PropTypes.string,
    catering: PropTypes.string,
    private_party: PropTypes.shape({
      facilities: PropTypes.string,
      contact: PropTypes.string,
    }),
    location: PropTypes.shape({
      map: PropTypes.string,
      street: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      zip: PropTypes.string,
      neighborhood: PropTypes.string,
      parking_details: PropTypes.string,
      public_transit: PropTypes.string,
      cross_street: PropTypes.string,
    }),
    entertainment: PropTypes.string,
    specials: PropTypes.string,
    private_dining: PropTypes.string,
  }),
};

RestaurantDetails.defaultProps = {
  restaurantInfo: {
    restaurant_id: 0,
    name: '',
    stars: 0,
    reviews: 0,
    price: 0,
    cuisine: [],
    description: '',
    style: '',
    tags: {
      main: [],
      additional: [],
    },
    hours: '',
    phone: '',
    website: '',
    payment: [],
    dress: '',
    chef: '',
    catering: '',
    private_party: {
      facilities: '',
      contact: '',
    },
    location: {
      street: '',
      city: '',
      state: '',
      zip: '',
      neighborhood: '',
      parking_details: '',
      public_transit: '',
      cross_street: '',
    },
    entertainment: '',
    specials: '',
    private_dining: '',
  },
};


export default RestaurantDetails;
