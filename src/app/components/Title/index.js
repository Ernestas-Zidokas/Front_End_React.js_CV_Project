import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

function Title({ children, level, colorClass, weightClass }) {
  const Component = level > 6 || level < 1 ? 'h1' : `h${level}`;
  const className = `Title Title__level${level} ${colorClass} ${weightClass}`;

  return <Component className={className}>{children}</Component>;
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6, '1', '2', '3', '4', '5', '6']),
  colorClass: PropTypes.string,
  weightClass: PropTypes.string,
};

Title.defaultProps = {
  level: 1,
  colorClass: 'color-yellow',
  weightClass: 'font-weight-700',
};

export default Title;
