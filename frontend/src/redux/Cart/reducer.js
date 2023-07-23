import { GET_CART_ITEMS, DELETE_CART_ITEM, ADD_TO_CART, ADD_TO_FAVOURITE } from "../actionTypes";

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
    case DELETE_CART_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    default:
      return state;
  }
};

export default cartReducer;
