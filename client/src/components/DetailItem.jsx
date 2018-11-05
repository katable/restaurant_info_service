import React from 'react';
import PropTypes from 'prop-types';
import styles from '../scss/base.scss';

const DetailItem = ({ title, icon, details }) => {
  if (details) {
    let link;
    if (title === 'Address') {
      link = `${styles.itemDetails} ${styles.addressLink}`;
    } else if (title === 'Website') {
      link = `${styles.itemDetails} ${styles.websiteLink}`;
    } else {
      link = `${styles.itemDetails}`;
    }
    return (
      <div className={styles.detailItem}>
        <div className={styles.detailIcon}>
          <svg>
            <path d={icon} />
          </svg>
        </div>
        <div className={styles.itemInfo}>
          <div className={styles.itemTitle}>
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
