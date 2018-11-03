import React from 'react';
import PropTypes from 'prop-types';

const TopTags = ({ restaurantTags }) => {
  const tagButtons = restaurantTags.map((tagButton, i) => <div className="tag-button" key={tagButton[i]}>{tagButton}</div>);
  return (
    <div id="top-tags">
      <div className="tag-text">Top Tags:</div>
      {tagButtons}
    </div>
  );
};

TopTags.propTypes = {
  restaurantTags: PropTypes.arrayOf(PropTypes.string),
};

TopTags.defaultProps = {
  restaurantTags: [],
};

export default TopTags;
