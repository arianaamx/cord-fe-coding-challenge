import React, { useState } from "react";
import styled from "styled-components";

import MovieItem from "../movieitem";

function MovieList({ movies, genres }) {
  const objectToMapGenres = (genres) => {
    let genresMap = new Map();
    genres.forEach((element) => genresMap.set(element.id, element.name));
    return genresMap;
  };

  const parseGenreNames = (ids, genres) => {
    let genreNames = [];
    ids.forEach((element) => genreNames.push(genres.get(element)));
    return genreNames;
  };

  const genresMap = objectToMapGenres(genres);

  return (
    <MoviesWrapper>
      {movies.map((element, i) => {
        return (
          <MovieItem
            key={element.id}
            title={element.title}
            genre={parseGenreNames(element.genre_ids, genresMap)}
            releaseDate={element.release_date}
            voteAverage={element.voteAverage}
            backdropPath={element.backdrop_path}
            overview={element.overview}
            posterPath={element.poster_path}
          />
        );
      })}
    </MoviesWrapper>
  );
}
export default MovieList;

const MoviesWrapper = styled.div`
  position: relative;
  margin-left: 45px;
  margin-right: 15px;
`;
