// import { HYDRATE } from "next-redux-wrapper";
import { ADD_TO_CART, REMOVE_TO_CART, REDUCE_TO_CART } from "../../actions/types";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case HYDRATE:
    //   return { ...state, ...action.payload.user };


    //-------------
    case ADD_TO_CART:
      let newState_addToCart = [
        ...state,
      ];
      let productExist = false;
      let position;
      newState_addToCart.forEach((product, index) => {
        if (product.id_product === action.payload.id_product) {
          productExist = true;
          position = index;
        }
      });

      if (!productExist) {
        newState_addToCart.push({
          ...action.payload,
          cantidad: 1,
        });
      } else {
        newState_addToCart[position].cantidad = newState_addToCart[position].cantidad + 1;
      }
      return newState_addToCart;


    //-------------
    case REMOVE_TO_CART:
      let newState_removeToCart = state.filter(product => product.id_product !== action.payload);
      return newState_removeToCart;


    //------------
    case REDUCE_TO_CART:
      let newState_reduceToCart = [
        ...state,
      ];
      let position2;
       newState_reduceToCart.forEach((product, index) => {
        if(product.id_product === action.payload){
          position2 = index
        } 
      });
      if (newState_reduceToCart[position2].cantidad > 0) {
        newState_reduceToCart[position2].cantidad = newState_reduceToCart[position2].cantidad - 1;
        return newState_reduceToCart;
      }


    default:
      return state;
  }
};

export default reducer;