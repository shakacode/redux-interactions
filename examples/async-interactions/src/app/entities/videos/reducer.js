/**
 * THIS FILE IS JUST A PLACEHOLDER
 * SEE POSTS FOLDER FOR COMPLETE EXAMPLE
 *
 */

import { Map, OrderedSet, fromJS } from 'immutable';

import { createReducer } from '../../../utils';


const initialState = fromJS({
 index: new OrderedSet(),
 entities: new Map(),
});

export default createReducer(initialState, {});
