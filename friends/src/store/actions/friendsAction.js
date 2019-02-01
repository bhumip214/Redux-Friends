import axios from "axios";

export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FETCHING_FRIENDS_SUCCESS = "FETCHING_FRIENDS_SUCCESS";
export const FETCHING_FRIENDS_FAILURE = "FETCHING_FRIENDS_FAILURE";
export const DELETE_FRIEND_START = "DELETE_FRIEND_START";
export const DELETE_FRIEND_SUCCESS = "DELETE_FRIEND_SUCCESS";
export const DELETE_FRIEND_FAILURE = "DELETE_FRIEND_FAILURE";

export const getData = () => dispatch => {
  dispatch({ type: FETCHING_FRIENDS });
  axios
    .get("http://localhost:5000/api/friends")
    .then(respond =>
      dispatch({
        type: FETCHING_FRIENDS_SUCCESS,
        payload: respond.data
      })
    )
    .catch(err => dispatch({ type: FETCHING_FRIENDS_FAILURE, payload: err }));
};

export const deleteFriend = id => dispatch => {
  dispatch({ type: DELETE_FRIEND_START });
  return axios
    .delete(`http://localhost:5000/api/friends/${id}`)
    .then(response => {
      dispatch({ type: DELETE_FRIEND_SUCCESS, payload: response.data });
    })
    .catch(error => dispatch({ type: DELETE_FRIEND_FAILURE, payload: error }));
};
