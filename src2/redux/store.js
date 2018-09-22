import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

const defaultState = {
  cityName: null,
  temp: null,
  isLoading: false,
  error: false
};
const sagaMiddleware = createSagaMiddleware();

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'START_FETCH':
      return {cityName: null, error: false, temp: null, isLoading: true};
    case 'FETCH_SUCCESS':
      return {cityName: action.cityName, error: false, isLoading: false, temp: action.temp};
    case 'FETCH_ERROR':
      return {cityName: null, error: true, isLoading: false, temp: null};

    default:
      return state;

  }
};

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga); 
export default store;
