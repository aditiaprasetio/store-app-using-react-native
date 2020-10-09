import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import rootReducer from './reducer';
// import {logger} from 'redux-logger';

const reducer = combineReducers({rootReducer});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware /* logger */),
);

sagaMiddleware.run(rootSaga);
export default store;
