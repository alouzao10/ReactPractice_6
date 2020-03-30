import { FETCH_POSTS, NEW_POST } from '../Actions/Types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log('Action');
      return {
        ...state,
        items: action.payloadS
      };
    case NEW_POST:
      return 1;
    default:
      return state;
  }
}
