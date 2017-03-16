import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import tree from './tree';
import DevTools from './DevTools';

export default createStore(
  tree,
  compose(
    applyMiddleware(thunkMiddleware),
    DevTools.instrument(),
  ),
);
