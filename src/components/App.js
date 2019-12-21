import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../index.css';
// eslint-disable-next-line
import calculate from '../logic/calculate';

const App = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState(state => calculate(state, buttonName));
  }

  render() {
    const toDisplay = this.state.next ? this.state.next : this.state.total;
    return (
      <div className="container">
        <Display display={toDisplay} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
