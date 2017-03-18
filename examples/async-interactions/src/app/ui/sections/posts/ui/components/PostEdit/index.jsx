import React, { Component } from 'react';
import { connect } from 'react-redux';

import selectors from './selectors';
import actions from './actions';
import PostEdit from './components';


class PostEditContainer extends Component {

  componentWillUnmount() {
    this.props.resetFormState();
  }

  render() {
    return <PostEdit {...this.props} />;
  }

};

export default connect(selectors, actions)(PostEditContainer);
