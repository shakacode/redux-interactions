import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from './reducers';
import DevTools from './DevTools';

export default createStore(
  reducers,
  compose(
    applyMiddleware(thunkMiddleware),
    DevTools.instrument(),
  ),
);
