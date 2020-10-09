import {
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  ADD_TO_CART,
} from '../actions/cart/cart_types';

export interface ICartState {
  list: any[];

  isFetching: boolean;
  isErrorFetchData: boolean;
}

const initialState: ICartState = {
  list: [],

  isFetching: false,
  isErrorFetchData: false,
};

export default function cartReducer(
  state = initialState,
  action: any,
): ICartState {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        isFetching: true,
        isErrorFetchData: false,
      };
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        list: action.payload,
        isFetching: false,
        isErrorFetchData: false,
      };
    case ADD_TO_CART_FAILURE:
      return {
        ...state,
        isFetching: false,
        isErrorFetchData: true,
      };
    default:
      return state;
  }
}
