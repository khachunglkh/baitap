import { ADD_MOVIE, FETCH_MOVIE, FETCH_FAILED, FETCH_SUCCESS } from '../actions/actionTypes';
const movieReducers = (movies =[], action) => {
  switch (action.type) {

    case FETCH_SUCCESS:
      console.log('aaaaaaaa', action.receivedMovies)
      return action.receivedMovies;
    case FETCH_FAILED:
      return [];
    // case ADD_MOVIE:
    //   return [
    //     ...movies,
    //     action.newMovie
    //   ];
    default:
      return movies;
  }
}

export default movieReducers;
