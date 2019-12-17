import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  return (
    <div>
      <div>{props.result}</div>
    </div>
  );
};

Display.propTypes = {
  result: PropTypes.string.isRequired
};

Display.defaultProps = {
  result: '0'
};

export default Display;
