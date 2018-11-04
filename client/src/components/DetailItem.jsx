import React from 'react';
import PropTypes from 'prop-types';

const DetailItem = ({ title, icon, details }) => {
  if (details) {
    let link;
    if (title === 'Address') {
      link = 'item-details address-link';
    } else if (title === 'Website') {
      link = 'item-details website-link';
    } else {
      link = 'item-details';
    }
    return (
      <div className="detail-item">
        <div className="detail-icon">
          <svg>
            <path d={icon} />
          </svg>
        </div>
        <div className="item-info">
          <div className="item-title">
            {title === 'Address' ? '' : title}
          </div>
          <div className={link}>
            {details}
          </div>
        </div>
      </div>
    );
  }
  return null;
};

DetailItem.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  details: PropTypes.string,
};

DetailItem.defaultProps = {
  title: '',
  icon: '',
  details: '',
};

export default DetailItem;
