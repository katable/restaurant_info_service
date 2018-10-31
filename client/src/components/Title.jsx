import React from 'react';

const Title = (props) => {
  const restaurantInfo = props.restaurantInfo;
  return (
    <h1>{restaurantInfo.name}</h1>
  );
};

export default Title;
