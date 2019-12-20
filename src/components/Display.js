import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
  render() {
    return (
      <div className="display">
        {this.props.display}
      </div>
    )
  }
}

Display.propTypes = {
  display: PropTypes.string,
};

Display.defaultProps = {
  display: '0',
};

export default Display;
