import { createBranch } from 'redux-tree';

import dataFetchLeaf from './ui/leaf';
import postEditLeaf from './ui/components/PostEdit/leaf';

// Posts Section branch
export default createBranch({
  dataFetch: dataFetchLeaf,
  postEdit: postEditLeaf,
});
