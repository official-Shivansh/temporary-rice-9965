// actions/cartActions.js
import axios from 'axios';
import {  GET_FAV_ITEMS,DELETE_FAV_ITEM } from '../actionTypes';


const API_URL = 'https://test1-h9kd.onrender.com/men';

// Get cart items
export const getFavItems = () => async (dispatch) => {
  try {
    const response = await axios.get(`https://test1-h9kd.onrender.com/men`);
    
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
    await axios.delete(`${API_URL}/${itemId}`);
    dispatch({
      type: DELETE_FAV_ITEM,
      payload: itemId,
    });
  } catch (error) {
   console.log(error)
  }
};
