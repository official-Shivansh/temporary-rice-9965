


import { GET_FAV_ITEMS, DELETE_FAV_ITEM, ADD_TO_CART } from '../actionTypes';


const initialState = {
  items: [],
};

const FavReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAV_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case DELETE_FAV_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    default:
      return state;
  }
};

export default FavReducer;
