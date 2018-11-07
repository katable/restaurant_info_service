import React from 'react';
import PropTypes from 'prop-types';
import Stars from './Stars';
import styles from '../scss/base.scss';

const { icons } = require('../img/icons.js');

const InfoMenu = ({ restaurantInfo }) => {
  const { stars, reviews } = restaurantInfo;
  let price = '';
  if (restaurantInfo.price === 1) {
    price = '$30 and under';
  } else if (restaurantInfo.price === 2) {
    price = '$31 to $50';
  } else if (restaurantInfo.price === 3) {
    price = '$50 and over';
  }
  const cuisine = restaurantInfo.cuisine[0];
  return (
    <div id={styles.infoMenu}>
      <Stars stars={stars} />
      <div className={styles.reviewContainer}>
        <div className={styles.reviews}>
          <svg>
            <path d={icons.reviews} />
          </svg>
          <div className={styles.reviewText}>
            {`${reviews} reviews`}
          </div>
        </div>
      </div>
      <div className={styles.price}>
        <svg>
          <path d={icons.priceRange} />
        </svg>
        <div className={styles.priceText}>
          {price}
        </div>
      </div>
      <div className={styles.cuisine}>
        <svg>
          <path d={icons.cuisine} />
        </svg>
        <div className={styles.cuisineText}>{cuisine}</div>
      </div>
    </div>
  );
};

InfoMenu.propTypes = {
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

InfoMenu.defaultProps = {
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


export default InfoMenu;
