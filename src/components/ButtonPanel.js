import React from 'react';
import '../index.css';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = (props) => {
  const {
    clickHandler,
  } = props;

  const handleClick = (buttonName) => {
    clickHandler(buttonName);
  };

  return (
    <div>
      <div className="row1">
        <Button name="AC" color="lightgray" clickHandler={handleClick} />
        <Button name="+/-" color="lightgray" clickHandler={handleClick} />
        <Button name="%" color="lightgray" clickHandler={handleClick} />
        <Button name="/" clickHandler={handleClick} />
      </div>
      <div className="row2">
        <Button name="7" color="lightgray" clickHandler={handleClick} />
        <Button name="8" color="lightgray" clickHandler={handleClick} />
        <Button name="9" color="lightgray" clickHandler={handleClick} />
        <Button name="X" clickHandler={handleClick} />
      </div>
      <div className="row3">
        <Button name="4" color="lightgray" clickHandler={handleClick} />
        <Button name="5" color="lightgray" clickHandler={handleClick} />
        <Button name="6" color="lightgray" clickHandler={handleClick} />
        <Button name="-" clickHandler={handleClick} />
      </div>
      <div className="row4">
        <Button name="1" color="lightgray" clickHandler={handleClick} />
        <Button name="2" color="lightgray" clickHandler={handleClick} />
        <Button name="3" color="lightgray" clickHandler={handleClick} />
        <Button name="+" clickHandler={handleClick} />
      </div>
      <div className="row5">
        <Button name="0" color="lightgray" wide clickHandler={handleClick} />
        <Button name="." color="lightgray" clickHandler={handleClick} />
        <Button name="=" clickHandler={handleClick} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
