import React from 'react';
import '../index.css';
import Button from './Button';

const ButtonPanel = () => (
  <div>
    <div className="row1">
      <Button name="AC" color="lightgray" />
      <Button name="+/-" color="lightgray" />
      <Button name="%" color="lightgray" />
      <Button name="/" />
    </div>
    <div className="row2">
      <Button name="7" color="lightgray" />
      <Button name="8" color="lightgray" />
      <Button name="9" color="lightgray" />
      <Button name="X" />
    </div>
    <div className="row3">
      <Button name="4" color="lightgray" />
      <Button name="5" color="lightgray" />
      <Button name="6" color="lightgray" />
      <Button name="-" />
    </div>
    <div className="row4">
      <Button name="1" color="lightgray" />
      <Button name="2" color="lightgray" />
      <Button name="3" color="lightgray" />
      <Button name="+" />
    </div>
    <div className="row5">
      <Button name="0" color="lightgray" wide />
      <Button name="." color="lightgray" />
      <Button name="=" />
    </div>
  </div>
);

export default ButtonPanel;
