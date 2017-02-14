import React from 'react';
import { Route } from 'react-router-dom';
import Spinner from 'react-spinkit';

import Posts from './Posts';
import PostEdit from './PostEdit';

import './index.css';


const PostsSection = ({ isFetching }) => (
  isFetching
  ?
    <div className="posts-spinner-wrapper">
      <Spinner spinnerName="chasing-dots" noFadeIn />
    </div>
  :
    <div>
      <Route
        path="/"
        exact
        render={() => <Posts />}
      />
      <Route
        path="/posts/:postId"
        render={router => <PostEdit {...router.match.params} />}
      />
    </div>
);

export default PostsSection;
