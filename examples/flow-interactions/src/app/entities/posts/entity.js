/* @flow */

import { Map, List, OrderedSet, Record } from 'immutable';

export type Id = number;

export type PostShape = {|
  id: Id,
  title: string,
|};

export type PostsIndex = OrderedSet<Id>;
export type PostsMap = Map<Id, Record<PostShape>>;
export type PostsList = List<Record<PostShape>>;

export const Post = Record({
  id: null,
  title: null,
});
