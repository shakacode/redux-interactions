/* @flow */

import React from 'react';
import Spinner from 'react-spinkit';
import classNames from 'classnames';

import type { PostsList } from '../../entities/posts/entity';

import './index.css';


type Props = {
  postId: number,
  posts: PostsList,
  title: string,
  isSubmittable: boolean,
  isProcessing: boolean,
  selectPost: (postId: string) => void,
  updateTitleInput: (nextTitle: string) => void,
  updateServerState: (postId: number) => void,
};

const Form = ({
  postId,
  posts,
  title,
  isSubmittable,
  isProcessing,
  selectPost,
  updateTitleInput,
  updateServerState,
}: Props) => (
  <form
    className="form"
    onSubmit={event => {
      event.preventDefault();
      updateServerState(postId);
    }}
  >
    <div className="form-field-wrapper">
      <label htmlFor="post-id-select">
        Post
      </label>
      <select
        id="post-id-select"
        className="form-field"
        value={postId}
        onChange={event => selectPost(event.target.value)}
      >
        {posts.map(post => (
          <option
            key={post.get('id')}
            value={post.get('id')}
          >
            {/* Can't do `post.title`, see README */}
            {post.get('title')}
          </option>
        ))}
      </select>
    </div>
    <div className="form-field-wrapper">
      <label htmlFor="post-title-input">
        Title
      </label>
      <input
        type="text"
        id="post-title-input"
        className="form-field"
        value={title}
        disabled={isProcessing}
        onChange={event => updateTitleInput(event.target.value)}
      />
    </div>
    <div className="button-wrapper">
      <button
        className={classNames(
          'button',
          { 'button-processing': isProcessing },
        )}
        disabled={!isSubmittable || isProcessing}
      >
        Save
      </button>
      {
        isProcessing &&
        <div className="spinner-wrapper">
          <Spinner spinnerName="chasing-dots" noFadeIn />
        </div>
      }
    </div>
  </form>
);

export default Form;
