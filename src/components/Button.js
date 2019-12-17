import React from 'react';
import PropTypes from 'prop-types';

export class Button extends React.Component {
  render() {
    return (
      <div>
        <button>{this.props.name}</button>
      </div>
    )
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired
};