import React from 'react';
import PropTypes from 'prop-types';
import styles from '../scss/base.scss';

const PrivateDining = ({ privateDining }) => (
  <div id={styles.privateDining}>
    <h2>Private Dining</h2>
    <p>{ privateDining }</p>
    <div className={styles.privateDiningButton}>View Private Dining Details</div>
  </div>
);

PrivateDining.propTypes = {
  privateDining: PropTypes.string,
};

PrivateDining.defaultProps = {
  privateDining: '',
};

export default PrivateDining;
