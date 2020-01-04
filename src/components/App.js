import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../index.css';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      // eslint-disable-next-line
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState(state => calculate(state, buttonName));
  }

  render() {
    // eslint-disable-next-line
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
