import { REQUEST_FETCHING, REQUEST_SUCCESS, REQUEST_FAILURE } from "../actions";

const initialState = {
  friends: [],
  fetchingFriends: false,
  error: null
};
export const friendsReducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case REQUEST_FETCHING:
      return { ...state, fetching: true, error: null };

    case REQUEST_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        fetching: false,
        error: null
      };

    case REQUEST_FAILURE:
      return { ...state, fetching: false, error: action.payload };

    default:
      return state;
  }
};
