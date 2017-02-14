import { Map, OrderedSet, fromJS } from 'immutable';

import { createReducer } from '../../../utils';

import { mergePostsOnFetch } from '../../ui/sections/posts/ui/interactions/postsFetch';
import { updatePostOnEdit } from '../../ui/sections/posts/ui/components/PostEdit/interactions/serverStateUpdate';


const initialState = fromJS({
  index: new OrderedSet(),
  entities: new Map(),
});

export default createReducer(initialState, {
  ...mergePostsOnFetch,
  ...updatePostOnEdit,
});
