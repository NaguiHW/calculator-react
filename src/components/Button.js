import React from 'react';
import PropTypes from 'prop-types';

const Button = props => (
  <div><button type="button">{props.name}</button></div>
);

Button.propTypes = {
  name: PropTypes.string.isRequired
};

export default Button;
