import React from 'react';

const icons = require('../img/icons.js');

const Stars = (props) => {
  const stars = props.stars;
  console.log(stars);
  const fullStar = <svg><path className="red" d={icons.star}></path></svg>;
  const fullStars = [];
  const emptyStars = [];
  for (let i = 0; i < Math.floor(stars); i += 1) {
    fullStars.push(fullStar);
  }

  return (
    <div className="stars">
      {fullStars}
      <div className="stars-text">
        {stars.toFixed(1)}
      </div>
    </div>
  );
}

export default Stars;
