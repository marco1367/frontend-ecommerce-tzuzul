// import { HYDRATE } from "next-redux-wrapper";
import { ADD_TO_CART, REMOVE_TO_CART } from "../../actions/types";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case HYDRATE:
    //   return { ...state, ...action.payload.user };

    
    case ADD_TO_CART:
      let newState_addToCart = [
          ...state,
      ];
      newState_addToCart.push(action.payload);
      console.log(action)
      return newState_addToCart;


    case REMOVE_TO_CART:
      let newState_removeToCart = state.filter( productId => productId!==action.payload );
      return newState_removeToCart;


    default:
      return state;
  }
};

export default reducer;