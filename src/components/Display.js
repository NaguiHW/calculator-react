import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.result}</div>
      </div>
    )
  }
};

Display.propTypes = {
  result: PropTypes.string.isRequired
};

Display.defaultProps = {
  result: '0'
};

export default Display;