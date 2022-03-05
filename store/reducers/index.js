import { combineReducers } from "redux";
import cartReducer from './cart/index'
import createAccountReducer from './createAccount/index'

export default combineReducers({
  cart: cartReducer,
  newAccount: createAccountReducer,
});