import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../index.css';
import calculate from '../logic/calculate';

const App = () => (
  <div className="container">
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
