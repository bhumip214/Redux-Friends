import {
  REQUEST_FETCHING,
  REQUEST_SUCCESS,
  REQUEST_FAILURE,
  ADD_FRIEND_START,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILURE,
  DELETE_FRIEND_START,
  DELETE_FRIEND_SUCCESS,
  DELETE_FRIEND_FAILURE
} from "../actions";

const initialState = {
  friends: [],
  error: null,
  isfetchingFriends: false,
  isAddingFriends: false,
  isDeletingFriends: false
};
export const friendsReducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    // ================================ GETTING DATA ====================
    case REQUEST_FETCHING:
      return { ...state, isfetchingFriends: true, error: null };

    case REQUEST_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        isfetchingFriends: false,
        error: null
      };

    case REQUEST_FAILURE:
      return { ...state, isfetchingFriends: false, error: action.payload };

    // ================================ ADDING NEW FRIEND  ====================
    case ADD_FRIEND_START:
      return { ...state, isAddingFriends: true, error: null };

    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        isAddingFriends: false,
        error: null
      };

    case ADD_FRIEND_FAILURE:
      return { ...state, isAddingFriends: false, error: action.payload };

    // ================================ DELETING  FRIEND ====================
    case DELETE_FRIEND_START:
      return { ...state, isDeletingFriends: true, error: null };

    case DELETE_FRIEND_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        isDeletingFriends: false,
        error: null
      };

    case DELETE_FRIEND_FAILURE:
      return { ...state, isDeletingFriends: false, error: action.payload };

    default:
      return state;
  }
};
