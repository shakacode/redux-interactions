/* @flow */

import { connect } from 'react-redux';

import selectors from './selectors';
import actions from './actions';
import Form from './components';

export default connect(selectors, actions)(Form);
