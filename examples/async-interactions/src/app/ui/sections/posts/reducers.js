import { combineReducers } from 'redux-immutable';

import dataFetchReducer from './ui/reducer';
import postEditReducer from './ui/components/PostEdit/reducer';

// Combining all Posts Section reducers
export default combineReducers({
  dataFetchStore: dataFetchReducer,
  postEditStore: postEditReducer,
});
