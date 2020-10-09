import {ADD_TO_CART} from './cart_types';

export function addToCart(payload: any) {
  return {
    type: ADD_TO_CART,
    payload,
  };
}
