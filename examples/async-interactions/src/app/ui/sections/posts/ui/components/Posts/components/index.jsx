import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';


const Posts = ({ posts }) => (
  <div className="posts">
    {posts.map(post => (
      <div key={post.id} className="post">
        <div className="post-id">
          #{post.id}
        </div>
        <span className="post-title">
          <Link
            to={`/posts/${post.id}`}
            className="post-edit-link"
          >
            {post.title}
          </Link>
        </span>
        <Link
          to={`/posts/${post.id}`}
          className="post-edit-button button"
        >
          Edit
        </Link>
      </div>
    ))}
  </div>
);

export default Posts;
