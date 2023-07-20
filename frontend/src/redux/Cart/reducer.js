 

import {  GET_CART_ITEMS } from "../actionTypes";


const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    // case DELETE_CART_ITEM:
    //   return {
    //     ...state,
    //     items: state.items.filter((item) => item.id !== action.payload),
    //   };
    default:
      return state;
  }
};

export default cartReducer;
