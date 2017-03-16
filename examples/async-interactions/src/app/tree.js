import { createTree } from 'redux-tree';

import entitiesBranch from './entities/branch';
import uiBranch from './ui/branch';

export default createTree({
  entities: entitiesBranch,
  ui: uiBranch,
});
