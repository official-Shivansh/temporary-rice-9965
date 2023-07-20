// actions/cartActions.js
import axios from 'axios';
import {  GET_CART_ITEMS } from '../actionTypes';


const API_URL = 'https://test1-h9kd.onrender.com/men';

// Get cart items
export const getCartItems = () => async (dispatch) => {
  try {
    const response = await axios.get(`https://test1-h9kd.onrender.com/men`);
    
    dispatch({
      type: GET_CART_ITEMS,
      payload: response,
    });
  } catch (error) {
    console.log(error)
  }
};

// Delete cart item
// export const deleteCartItem = (itemId) => async (dispatch) => {
//   try {
//     await axios.delete(`${API_URL}/${itemId}`);
//     dispatch({
//       type: DELETE_CART_ITEM,
//       payload: itemId,
//     });
//   } catch (error) {
//    console.log(error)
//   }
// };
