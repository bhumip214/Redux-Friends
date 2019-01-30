import axios from "axios";

export const REQUEST_FETCHING = "FETCHING";
export const REQUEST_SUCCESS = "SUCCESS";
export const REQUEST_FAILURE = "FAILURE";

export const getData = () => dispatch => {
  dispatch({ type: REQUEST_FETCHING });
  axios
    .get("http://localhost:5000/api/friends")
    .then(res =>
      dispatch({
        type: REQUEST_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => dispatch({ type: REQUEST_FAILURE, payload: err }));
};
