import React from 'react';
import '../index.css';
import Button from './Button';

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.props.clickHandler(buttonName);
  }

  render() {
    return (
      <div>
        <div className="row1">
          <Button name="AC" color="lightgray" clickHandler={this.handleClick} />
          <Button name="+/-" color="lightgray" clickHandler={this.handleClick} />
          <Button name="%" color="lightgray" clickHandler={this.handleClick} />
          <Button name="/" clickHandler={this.handleClick} />
        </div>
        <div className="row2">
          <Button name="7" color="lightgray" clickHandler={this.handleClick} />
          <Button name="8" color="lightgray" clickHandler={this.handleClick} />
          <Button name="9" color="lightgray" clickHandler={this.handleClick} />
          <Button name="X" clickHandler={this.handleClick} />
        </div>
        <div className="row3">
          <Button name="4" color="lightgray" clickHandler={this.handleClick} />
          <Button name="5" color="lightgray" clickHandler={this.handleClick} />
          <Button name="6" color="lightgray" clickHandler={this.handleClick} />
          <Button name="-" clickHandler={this.handleClick} />
        </div>
        <div className="row4">
          <Button name="1" color="lightgray" clickHandler={this.handleClick} />
          <Button name="2" color="lightgray" clickHandler={this.handleClick} />
          <Button name="3" color="lightgray" clickHandler={this.handleClick} />
          <Button name="+" clickHandler={this.handleClick} />
        </div>
        <div className="row5">
          <Button name="0" color="lightgray" wide clickHandler={this.handleClick} />
          <Button name="." color="lightgray" clickHandler={this.handleClick} />
          <Button name="=" clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
