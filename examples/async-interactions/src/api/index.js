import { posts } from './data';

export default {
  getPosts:
    () =>
      new Promise(resolve =>
        setTimeout(() => resolve({ posts }), 2000)),

  patchPost:
    (postId, data) =>
      new Promise(resolve =>
        setTimeout(() => resolve({ data }), 2000)),
}
