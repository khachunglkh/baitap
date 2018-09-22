import { ADD_MOVIE, FETCH_MOVIE, FETCH_FAILED, FETCH_SUCCESS } from '../actions/actionTypes';
//saga effects
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './Api';
function* fetchMovies(){
  console.log('hello');
  try {
    const receivedMovies = yield Api.getMoviesFromApi();
    yield put({ type: FETCH_SUCCESS, receivedMovies: receivedMovies });


  } catch(error){
    yield put ({ type: FETCH_FAILED, error});
  }
}
export function* watchFetchMovies() {
  yield takeLatest(FETCH_MOVIE,fetchMovies);

}
function* addNewMovie(action) {
  console.log('b', action)
  try{
    const result = yield Api.insertNewMovieFromApi(action.newMovie);
    yield console.log('result', result);
    if(result === true){
      yield put({ type: FETCH_MOVIE, sort: 'desc' });
    }
  } catch (error) {

  }
}
export function* watchAddNewMovie(){
  yield takeLatest(ADD_MOVIE,addNewMovie);
}
