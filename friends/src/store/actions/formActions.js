import axios from "axios";

export const ADD_FRIEND_START = "ADD_FRIEND_START";
export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_START";
export const ADD_FRIEND_FAILURE = "ADD_FRIEND_FAILURE";

export const addFriend = friend => dispatch => {
  dispatch({ type: ADD_FRIEND_START });
  axios
    .post("http://localhost:5000/api/friends", friend)
    .then(response => {
      dispatch({ type: ADD_FRIEND_SUCCESS, payload: response.data });
    })
    .catch(error => dispatch({ type: ADD_FRIEND_FAILURE, payload: error }));
};
