import { combineReducers, legacy_createStore } from "redux";
import artworkReducer from "../redux/reducers/artworkReducer/artworkReducer";
const rootReducer = combineReducers({ artworkReducer });

export const store = legacy_createStore(rootReducer);
