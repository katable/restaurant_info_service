import React from 'react';
import PropTypes from 'prop-types';

const { icons } = require('../img/icons.js');

const Stars = ({ stars }) => {
  const allStars = [];
  for (let i = 0; i < Math.floor(stars); i += 1) {
    allStars.push(<svg key={allStars.length}><path className="red" d={icons.star.full} /></svg>);
  }

  if (stars - Math.floor(stars) > 0.25 && stars - Math.floor(stars) < 0.75) {
    allStars.push(
      <svg key={allStars.length}>
        <path className="grey" d={icons.star.full} />
        <path className="red" d={icons.star.half} />
      </svg>,
    );
    for (let i = 0; i < 5 - Math.floor(stars) - 1; i += 1) {
      allStars.push(<svg key={allStars.length}><path className="grey" d={icons.star.full} /></svg>);
    }
  } else {
    for (let i = 0; i < 5 - Math.floor(stars); i += 1) {
      allStars.push(<svg key={allStars.length}><path className="grey" d={icons.star.full} /></svg>);
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

Stars.propTypes = {
  stars: PropTypes.number,
};

Stars.defaultProps = {
  stars: 0,
};


export default Stars;
