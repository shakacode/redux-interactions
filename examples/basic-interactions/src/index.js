import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Root from './app';
import reducer from './app/reducer';

import './index.css';


const store = createStore(reducer);

const App = () => (
  <Provider {...{ store }}>
    <Root />
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
