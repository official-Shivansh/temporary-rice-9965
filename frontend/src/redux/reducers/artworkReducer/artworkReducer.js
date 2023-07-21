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

const initialState = {
  loading: false,
  arts: [],
  user: "",
  deleting: false,
  deleted: false,
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
        user: action.payload.arts[0].creator_name,
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
    case DELETE_ART_REQUEST:
      return {
        ...state,
        deleting: true,
        deleted: false,
        error: null,
      };
    case DELETE_ART_SUCCESS:
      return {
        ...state,
        deleting: false,
        deleted: true,
        error: null,
      };
    case DELETE_ART_FAILURE:
      return {
        ...state,
        deleting: false,
        deleted: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default artworkReducer;
