export default {
  patchPost:
    (postId, data) =>
      new Promise(resolve =>
        setTimeout(() => resolve({ postId, data }), 2000)),
};
