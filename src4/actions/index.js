import { ADD_MOVIE, FETCH_MOVIE, FETCH_FAILED, FETCH_SUCCESS } from './actionTypes';

export const fetchMovieAction = (sort) => {
  return {
    type: FETCH_MOVIE,
    sort
  }
}

export const addMovieAction = (newMovie) => {
  console.log('a',newMovie)
  return {
    type: ADD_MOVIE,
    //newMovie: newMovie
    newMovie
  }
}
//Action sent by redux-saga
export const fetchSuccessAction = (receivedMovies) => {
  return {
    type: FETCH_SUCCESS,
    receivedMovies
  }
}

export const fetchFailedAction = (error) => {
  return {
    type: FETCH_FAILED,
    error
  }
}
