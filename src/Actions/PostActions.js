import { FETCH_POSTS, NEW_POST } from './Types';

export const fetchPosts = () => dispatch => {
  console.log('Fetching');
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};
