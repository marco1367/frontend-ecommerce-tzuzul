import { combineReducers } from "redux";
import cartReducer from './cart/index'

export default combineReducers({
  cart: cartReducer,
});