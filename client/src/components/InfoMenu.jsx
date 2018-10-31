import React from 'react';
import Stars from './Stars.jsx';

const icons = require('../img/icons.js');

const InfoMenu = (props) => {
  const stars = props.restaurantInfo.stars;
  const reviews = props.restaurantInfo.reviews;
  let price = '';
  if (props.restaurantInfo.price === 1) {
    price = '$30 and under';
  } else if (props.restaurantInfo.price === 2) {
    price = '$31 to $50';
  } else if (props.restaurantInfo.price === 3) {
    price = '$50 and over';
  }
  const cuisine = props.restaurantInfo.cuisine[0];
  return (
    <div id="info-menu">
      <Stars stars={stars} />
      <div className="review-container">
        <div className="reviews">
          <svg>
            <path d={icons.reviews}></path>
          </svg>
          <div className="review-text">
            {reviews}
            reviews
          </div>
        </div>
      </div>
      <div className="price">
        <svg>
          <path d={icons.priceRange}></path>
        </svg>
        <div className="price-text">
          {price}
        </div>
      </div>
      <div className="cuisine">
        <svg>
          <path d={icons.cuisine}></path>
        </svg>
        <div className="cuisine-text">{cuisine}</div>
      </div>
      {/*
      <div className="opentable-star-fill"></div>
      <div className="opentable-star-fill"></div>
      <div className="opentable-star-fill1"></div>
      <div className="opentable-star-fill3"></div>
      <div className="opentable-star-fill4"></div>
      <div className="opentable-star-fill5"></div>
      <div className="opentable-star-fill6"></div>
      */}
    </div>
  );
};

export default InfoMenu;
