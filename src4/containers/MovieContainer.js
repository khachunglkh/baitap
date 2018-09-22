import {connect} from 'react-redux';
import MovieComponent from '../components/MovieComponent';

//Action ?
import { addMovieAction, fetchMovieAction, fetchSuccessAction, fetchFailedAction } from '../actions';

const mapStatetoProps = (state) => {
  return {
    movie: state.movieReducers
  }
};

const mapDispatchtoProps = (dispatch) => {
  return {
    onFetchMovies: () => {
      dispatch(fetchMovieAction());
      console.log('dispatch(fetchMovieAction());')
    },
    onAddMovie: (newMovie) => {
      dispatch(addMovieAction(newMovie));
    }
  }
};
const MovieContainer = connect (mapStatetoProps, mapDispatchtoProps)(MovieComponent);
export default MovieContainer;
