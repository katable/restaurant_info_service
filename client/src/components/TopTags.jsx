import React from 'react';
import PropTypes from 'prop-types';

const TopTags = ({ restaurantTags }) => {
  const tagButtons = restaurantTags.map(tagButton => <div className="tag-button">{tagButton}</div>);
  return (
    <div id="top-tags">
      <div className="tag-text">Top Tags:</div>
      {tagButtons}
    </div>
  );
};

export default TopTags;
