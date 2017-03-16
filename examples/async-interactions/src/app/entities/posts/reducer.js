import { createReducer } from '../../../utils';

import state from './state';

import { mergePostsOnFetch } from '../../ui/sections/posts/ui/interactions/postsFetch';
import { updatePostOnEdit } from '../../ui/sections/posts/ui/components/PostEdit/interactions/serverStateUpdate';

export default createReducer(state, {
  ...mergePostsOnFetch,
  ...updatePostOnEdit,
});
