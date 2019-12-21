import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    name,
    color,
    wide,
  } = props;

  const handleClick = () => {
    props.clickHandler(name);
  };

  return (
    <div style={{ background: color }} className={wide ? 'wide' : 'normal'} onClick={handleClick}>
      {name}
    </div>
  );
}

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
