import React from 'react';
import PropTypes from 'prop-types';

const icons = require('../img/icons.js').icons;

const Stars = ({ stars }) => {
  const fullStar = <svg><path className="red" d={icons.star.full} /></svg>;
  const emptyStar = <svg><path className="grey" d={icons.star.full} /></svg>;
  const halfStar = (
    <svg>
      <path className="grey" d={icons.star.full} />
      <path className="red" d={icons.star.half} />
    </svg>
  );
  const allStars = [];
  for (let i = 0; i < Math.floor(stars); i += 1) {
    allStars.push(fullStar);
  }

  if (stars - Math.floor(stars) > 0.25 && stars - Math.floor(stars) < 0.75) {
    allStars.push(halfStar);
    for (let i = 0; i < 5 - Math.floor(stars) - 1; i += 1) {
      allStars.push(emptyStar);
    }
  } else {
    for (let i = 0; i < 5 - Math.floor(stars); i += 1) {
      allStars.push(emptyStar);
    }
  }

  return (
    <div className="stars">
      {allStars}
      <div className="stars-text">
        {stars.toFixed(1)}
      </div>
    </div>
  );
};

export default Stars;
