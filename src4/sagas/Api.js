const urlGetMovies = 'https://jsonplaceholder.typicode.com/users';
const urlPostMovies = 'https://jsonplaceholder.typicode.com/users';

function* getMoviesFromApi() {
  return yield fetch(urlGetMovies)
      .then((response) => response.json())
      .then((responseJson) => {

        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });

}

function* insertNewMovieFromApi(newMovie) {
  console.log(`newMovie api`, newMovie);
  const response = yield fetch(urlPostMovies,{
    method: 'POST',
    header: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: newMovie.title,
      email: newMovie.email,
    }),
  }) .then(response => response.json())
  .then(json => console.log(json));
 yield  console.log(`dddddddm api`, response);
  return yield (response.status === 201);
}

export const Api = {
  getMoviesFromApi,
  insertNewMovieFromApi
};
