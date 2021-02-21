import axios from "axios";

const API_KEY = process.env.REACT_APP_THE_MOVIE_DB_API_KEY;

// All of your API requests should be in this file
// i.e.
// export const getMovieGenres = async () => {

// };

export const getPopularMovies = async (setPopularMovies) => {
  await axios
    .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
    .then((response) => {
      console.log(response);
      setPopularMovies(response.data.results);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getMovieGenres = async (setGenreOptions) => {
  await axios
    .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
    .then((response) => {
      console.log(response);
      setGenreOptions(response.data.genres);
    })
    .catch((err) => {
      console.log(err);
    });
};
