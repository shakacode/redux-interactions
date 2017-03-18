import { connect } from 'react-redux';

import selectors from './selectors';
import Posts from './components';

export default connect(selectors, {})(Posts);
