import {
  FETCH_ARTS_REQUEST,
  FETCH_ARTS_SUCCESS,
  FETCH_ARTS_FAILURE,
  POST_ART_REQUEST,
  POST_ART_SUCCESS,
  POST_ART_FAILURE,
} from "../../actionTypes";

const initialState = {
  loading: false,
  arts: [],
  error: null,
};

const artworkReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ARTS_SUCCESS:
      return {
        ...state,
        loading: false,
        arts: action.payload,
        error: null,
      };
    case FETCH_ARTS_FAILURE:
      return {
        ...state,
        loading: false,
        arts: [],
        error: action.payload,
      };
    case POST_ART_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_ART_SUCCESS:
      return {
        ...state,
        loading: false,
        art: action.payload,
        error: null,
      };
    case POST_ART_FAILURE:
      return {
        ...state,
        loading: false,
        art: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default artworkReducer;
