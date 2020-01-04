import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    name, color, wide, clickHandler,
  } = props;

  const handleClick = () => {
    clickHandler(name);
  };

  return (
    // eslint-disable-next-line
    <div style={{ background: color }} className={wide ? 'wide' : 'normal'} onClick={handleClick}>
      {name}
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
