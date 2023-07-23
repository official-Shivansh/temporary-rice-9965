import {
  FETCH_ARTS_REQUEST,
  FETCH_ARTS_SUCCESS,
  FETCH_ARTS_FAILURE,
  POST_ART_REQUEST,
  POST_ART_SUCCESS,
  POST_ART_FAILURE,
  DELETE_ART_FAILURE,
  DELETE_ART_REQUEST,
  DELETE_ART_SUCCESS,
} from "../../actionTypes";

import axios from "axios";

// Set the token as a header in the request
const accessToken = JSON.parse(localStorage.getItem("token"));
console.log("here accessToken", accessToken);
const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
};
const url = `http://localhost:8080`;
export const fetchArts = (dispatch) => {
  dispatch({ type: FETCH_ARTS_REQUEST });

  axios
    .get(`${url}/arts/profile`, config)
    .then((response) => {
      dispatch({
        type: FETCH_ARTS_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_ARTS_FAILURE,
        payload: error.message,
      });
    });
};

export const postArt = (artData) => (dispatch) => {
  dispatch({ type: POST_ART_REQUEST });
  console.log("inside postArt function", artData);
  axios
    .post(`${url}/arts/addart`, artData, config)
    .then((response) => {
      dispatch({
        type: POST_ART_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: POST_ART_FAILURE,
        payload: error.message,
      });
    });
};

export const deleteArt = (id) => (dispatch) => {
  console.log("inside deleteArt function id is", id);
  dispatch({ type: DELETE_ART_REQUEST });
  axios
    .delete(`${url}/arts/delete/${id}`, config)
    .then((response) => {
      const { msg, deletedpost } = response.data;
      console.log("deletedpost", deletedpost);
      console.log(msg); // "Post deleted successfully"
      dispatch({
        type: DELETE_ART_SUCCESS,
        payload: id,
      });
    })
    .catch((error) => {
      console.error("Error deleting post:", error.message);
      dispatch({
        type: DELETE_ART_FAILURE,
        payload: error.message,
      });
    });
};
