import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ restaurantDescription, expanded, toggleDescriptionExpand }) => {
  const descriptionParagraphs = restaurantDescription.split('\n').map(paragraph => (
    <p key={Math.floor(Math.random() * 99999)}>{paragraph}</p>
  ));
  const expandCollapseDiv = (
    <div className="expand-collapse-link">
      <div role="presentation" className="expand-description" onClick={toggleDescriptionExpand}>
        {expanded ? '- Read less' : '+ Read more'}
      </div>
    </div>
  );

  return (
    <div id="description">
      <div id="description-text" className={expanded ? 'expanded-p' : 'collapsed-p'}>
        {descriptionParagraphs}
      </div>
      {descriptionParagraphs.length > 1 && expandCollapseDiv}
    </div>
  );
};


Description.propTypes = {
  restaurantDescription: PropTypes.string,
  expanded: PropTypes.bool,
  toggleDescriptionExpand: PropTypes.func,
};

Description.defaultProps = {
  restaurantDescription: '',
  expanded: false,
  toggleDescriptionExpand: () => {},
};

export default Description;
