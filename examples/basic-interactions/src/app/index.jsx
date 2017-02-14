import { connect } from 'react-redux';

import actions from './actions';
import Counter from './components';


const selector = state => ({ counter: state });

export default connect(selector, actions)(Counter);
