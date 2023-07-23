// actions/cartActions.js
import axios from 'axios';
import { GET_CART_ITEMS, DELETE_CART_ITEM, ADD_TO_CART, ADD_TO_FAVOURITE } from '../actionTypes';
const accessToken = JSON.parse(localStorage.getItem("token"));

const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
};

const API_URL = 'https://arthub-qlzd.onrender.com';

// Get cart items
export const getCartItems = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/cart`, config);

    dispatch({
      type: GET_CART_ITEMS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error)
  }
};


export const deleteCartItem = (itemId) => async (dispatch) => {
  try {
    await axios.delete(`${API_URL}/cart/delete/${itemId}`, config);
    dispatch({
      type: DELETE_CART_ITEM,
      payload: itemId,
    });
  } catch (error) {
    console.log(error)
  }
};

export const addItemToCart = (data) => async (dispatch) => {
  try {
    await axios.post(`${API_URL}/cart/${data}`, {}, config);
    dispatch({
      type: ADD_TO_CART,
      payload: data
    })
  } catch (error) {
    console.log(error);
  }
}

export const addItemToFavourite = (data) => async (dispatch) => {
  try {
    await axios.post(`${API_URL}/favourite/${data}`, {}, config);
    dispatch({
      type: ADD_TO_FAVOURITE,
      payload: data
    })
  } catch (error) {
    console.log(error);
  }
}


