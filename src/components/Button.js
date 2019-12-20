import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.clickHandler(this.props.name);
  }

  render() {
    return (
      <div style={{ background: this.props.color }} className={this.props.wide ? 'wide' : 'normal'} onClick={this.handleClick}>
        {this.props.name}
      </div>
    )
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
