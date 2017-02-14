import React, { Component } from 'react';
import { connect } from 'react-redux';

import selectors from './selectors';
import actions from './actions';
import PostsSection from './components';


class PostsSectionContainer extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  componentWillUnmount() {
    this.props.resetState();
  }

  render() {
    return <PostsSection {...this.props} />;
  }

}

export default connect(selectors, actions)(PostsSectionContainer);
