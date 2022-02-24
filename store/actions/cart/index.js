import {ADD_TO_CART, REMOVE_TO_CART}  from '../types';


export const addToCart = (id) => ({
  type: ADD_TO_CART,
  payload: id,
});

export const removeToCart = (id) => {
  return {
    type: REMOVE_TO_CART,
    payload: id
  };
};