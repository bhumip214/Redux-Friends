import axios from "axios";

export const REQUEST_FETCHING = "FETCHING";
export const REQUEST_SUCCESS = "SUCCESS";
export const REQUEST_FAILURE = "FAILURE";
export const DELETE_FRIEND_START = "DELETE_FRIEND_START";
export const DELETE_FRIEND_SUCCESS = "DELETE_FRIEND_SUCCESS";
export const DELETE_FRIEND_FAILURE = "DELETE_FRIEND_FAILURE";

export const getData = () => dispatch => {
  dispatch({ type: REQUEST_FETCHING });
  axios
    .get("http://localhost:5000/api/friends")
    .then(respond =>
      dispatch({
        type: REQUEST_SUCCESS,
        payload: respond.data
      })
    )
    .catch(err => dispatch({ type: REQUEST_FAILURE, payload: err }));
};

export const deleteFriends = id => dispatch => {
  dispatch({ type: DELETE_FRIEND_START });
  return axios
    .delete("http://localhost:5000/api/friends/${id}")
    .then(response => {
      dispatch({ type: DELETE_FRIEND_SUCCESS, payload: response.data });
    })
    .catch(error => dispatch({ type: DELETE_FRIEND_FAILURE, payload: error }));
};
