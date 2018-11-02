import React from 'react';
import PropTypes from 'prop-types';

const PrivateDining = ({ privateDining }) => (
  <div id="private-dining">
    <h2>Private Dining</h2>
    <p>{ privateDining }</p>
    <div className="private-dining-button">View Private Dining Details</div>
  </div>
);

PrivateDining.propTypes = {
  privateDining: PropTypes.string,
};

PrivateDining.defaultProps = {
  privateDining: '',
};

export default PrivateDining;
