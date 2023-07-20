// import { combineReducers, legacy_createStore } from "redux";

// const rootReducer = combineReducers({cartReducer});

// export const store = legacy_createStore(rootReducer);
import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './Cart/reducer';


const rootReducer = combineReducers({
   cartReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;