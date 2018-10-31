import React from 'react';
import Stars from './Stars.jsx';
import PropTypes from 'prop-types';

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
    <div id="info-menu">
      <Stars stars={stars} />
      <div className="review-container">
        <div className="reviews">
          <svg>
            <path d={icons.reviews} />
          </svg>
          <div className="review-text">
            {reviews}
            reviews
          </div>
        </div>
      </div>
      <div className="price">
        <svg>
          <path d={icons.priceRange} />
        </svg>
        <div className="price-text">
          {price}
        </div>
      </div>
      <div className="cuisine">
        <svg>
          <path d={icons.cuisine} />
        </svg>
        <div className="cuisine-text">{cuisine}</div>
      </div>
    </div>
  );
};

export default InfoMenu;
