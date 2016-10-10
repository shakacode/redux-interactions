import { combineReducers } from 'redux-immutable';

import dataReducers from './data/reducers';
import postsSectionReducers from './ui/sections/posts/reducers';

export default combineReducers({
  data: dataReducers,
  postsSection: postsSectionReducers,
});
