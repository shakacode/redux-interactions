import { combineReducers } from 'redux-immutable';

import postsReducer from './posts/reducer';
import videosReducer from './videos/reducer';
import worksReducer from './works/reducer';

// Combinig all data stores
export default combineReducers({
  postsStore: postsReducer,
  videosStore: videosReducer,
  worksStore: worksReducer,
});
