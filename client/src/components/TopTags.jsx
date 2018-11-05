import React from 'react';
import PropTypes from 'prop-types';
import styles from '../scss/base.scss';

const TopTags = ({ restaurantTags }) => {
  const tagButtons = restaurantTags.map((tagButton, i) => {
    return <div className={styles.tagButton} key={tagButton[i]}>{tagButton}</div>;
  });
  return (
    <div id={styles.topTags}>
      <div className={styles.tagText}>Top Tags:</div>
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
