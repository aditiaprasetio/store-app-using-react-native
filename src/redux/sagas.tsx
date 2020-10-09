import {all} from 'redux-saga/effects';
import cartWatcher from './actions/cart/cart_saga';

export default function* rootSaga() {
  yield all([cartWatcher()]);
}
