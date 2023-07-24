// actions/cartActions.js
import axios from 'axios';
import { GET_FAV_ITEMS, DELETE_FAV_ITEM } from '../actionTypes';
const accessToken = JSON.parse(localStorage.getItem("token"));
const API_URL = 'https://arthub-qlzd.onrender.com';

const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
};
// Get cart items
export const getFavItems = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/favourite`, config);

    dispatch({
      type: GET_FAV_ITEMS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error)
  }
};


export const deleteFavItem = (itemId) => async (dispatch) => {
  try {
    await axios.delete(`${API_URL}/favourite/delete/${itemId}`, config);
    dispatch({
      type: DELETE_FAV_ITEM,
      payload: itemId,
    });
  } catch (error) {
    console.log(error)
  }
};
