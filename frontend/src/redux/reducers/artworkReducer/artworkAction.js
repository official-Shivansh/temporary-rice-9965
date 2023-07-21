import {
  FETCH_ARTS_REQUEST,
  FETCH_ARTS_SUCCESS,
  FETCH_ARTS_FAILURE,
  POST_ART_REQUEST,
  POST_ART_SUCCESS,
  POST_ART_FAILURE,
} from "../../actionTypes";

import axios from "axios";

const url = `http://localhost:8080`;
export const fetchArts = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_ARTS_REQUEST });

    axios
      .get(`${url}/arts/getarts`)
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
};

export const postArt = (artData) => (dispatch) => {
  dispatch({ type: POST_ART_REQUEST });

  axios
    .post(`${url}/arts/addart`, artData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
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
