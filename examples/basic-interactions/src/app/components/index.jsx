import React from 'react';

import './index.css';


const Counter = ({ counter, increment, decrement }) => (
  <div className="container">
    <div className="header">
      <h2>Redux Basic Interactions</h2>
    </div>
    <div className="result">
      {counter}
    </div>
    <div className="buttons">
      <button
        type="button"
        className="button"
        onClick={decrement}
      >
        –
      </button>
      <button
        type="button"
        className="button"
        onClick={increment}
      >
        +
      </button>
    </div>
  </div>
);

export default Counter;
