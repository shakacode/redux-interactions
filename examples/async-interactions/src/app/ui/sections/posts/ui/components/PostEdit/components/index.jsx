import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from 'react-spinkit';
import classNames from 'classnames';

import './index.css';


const PostEdit = ({
  postId,
  title,
  isSubmittable,
  isProcessing,
  updateFormState,
  updateServerState,
}) => (
  <form
    className="form"
    onSubmit={event => {
      event.preventDefault();
      updateServerState(postId);
    }}
  >
    <input
      type="text"
      className="form-field post-title-field"
      value={title}
      disabled={isProcessing}
      onChange={event => updateFormState(event.target.value)}
    />
    <div className="submit-button-wrapper">
      <button
        className={classNames(
          'button',
          'submit-button',
          { 'submit-button-processing': isProcessing },
        )}
        disabled={!isSubmittable || isProcessing}
      >
        Save
      </button>
      {
        isProcessing &&
        <div className="post-edit-spinner-wrapper">
          <Spinner spinnerName="chasing-dots" noFadeIn />
        </div>
      }
    </div>
    <Link
      to="/"
      className="button cancel-button"
    >
      Back to posts
    </Link>
  </form>
);

export default PostEdit;
