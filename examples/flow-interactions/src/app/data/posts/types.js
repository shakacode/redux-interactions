/* @flow */

import { Map, List, OrderedSet, Record } from 'immutable';

export type Id = number;

export type Post = {|
  id: Id,
  title: string,
|};

export type PostsIndex = OrderedSet<Id>;
export type PostsMap = Map<Id, Record<Post>>;
export type PostsList = List<Record<Post>>;

type StoreShape = {|
  index: PostsIndex,
  entities: PostsMap,
|};

export type StoreState = Record<StoreShape>;
