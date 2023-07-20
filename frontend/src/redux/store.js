
import { combineReducers, legacy_createStore } from "redux";
import artworkReducer from "../redux/reducers/artworkReducer/artworkReducer";
import thunk from 'redux-thunk';
import cartReducer from './Cart/reducer';


const rootReducer = combineReducers({
   cartReducer,artworkReducer
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;