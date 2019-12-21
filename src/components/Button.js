import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { name, color, wide, clickHandler } = props;

  const handleClick = () => {
    clickHandler(name);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div style={{ background: color }} className={wide ? 'wide' : 'normal'} onClick={handleClick}>
      {name}
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
