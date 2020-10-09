import {put, select, takeLatest} from 'redux-saga/effects';
import {
  ADD_TO_CART,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
} from './cart_types';

import AndroidToast from '../../../components/AndroidToast';

AndroidToast.show('Awesome', AndroidToast.SHORT);

function* addToCart(action: any) {
  try {
    const reducer: any = yield select();
    let list = reducer.rootReducer.cartReducer.list;
    list.push(action.payload);

    yield put({type: ADD_TO_CART_SUCCESS, payload: list});
  } catch (e) {
    yield put({type: ADD_TO_CART_FAILURE});
  }
}

function* cartWatcher() {
  yield takeLatest(ADD_TO_CART, addToCart);
}

export default cartWatcher;
