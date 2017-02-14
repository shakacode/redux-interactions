import { connect } from 'react-redux';

import selectors from './selectors';
import StatusWidget from './components';

export default connect(selectors, {})(StatusWidget);
