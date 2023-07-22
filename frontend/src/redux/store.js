import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import artworkReducer from "../redux/reducers/artworkReducer/artworkReducer";
import { authReducer } from '../redux/reducers/authReducer/reducer'
import thunk from 'redux-thunk';
import cartReducer from './Cart/reducer';
const rootReducer = combineReducers({
   cartReducer, artworkReducer, authReducer
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;