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
  FETCH_ALLARTS_SUCCESS,
  UPDATE_ART_SUCCESS,
  UPDATE_ART_FAILURE,
} from "../../actionTypes";

const initialState = {
  loading: false,
  arts: [],
  allarts: [],
  user: "",
  deleting: false,
  deleted: false,
  updatedart: {},
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
    case FETCH_ALLARTS_SUCCESS:
      return {
        ...state,
        loading: false,
        allarts: action.payload,
        user: action.payload.arts[0].creator_name,
        error: null,
      };
    case UPDATE_ART_SUCCESS:
      return {
        ...state,
        loading: false,
        updatedart: action.payload,
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
    case UPDATE_ART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default artworkReducer;
