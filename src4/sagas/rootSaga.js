import { call, all, fork } from 'redux-saga/effects';
import { watchFetchMovies, watchAddNewMovie } from './movieSagas';

export default function* rootSaga(){
  yield [
    fork(watchFetchMovies),
    fork(watchAddNewMovie),
  ];
}
