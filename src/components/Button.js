import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, color, wide }) => (
  <button type="button" style={{ background: color }} className={ wide ? 'wide' : 'normal' }>
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
}

export default Button;
