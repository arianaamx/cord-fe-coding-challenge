import React from "react";

import * as colors from "../../colors";

import styled from "styled-components";

function MovieItem({ title, genre, overview, releaseDate, voteAverage, backdropPath }) {
  return (
    // The MovieItemWrapper must be linked to the movie details popup
    <MovieItemWrapper>
      <LeftCont>{backdropPath}</LeftCont>
      <RightCont>
        <h1>{title}</h1>
        {voteAverage}
        {genre.map((element, i) => {
          return <MoviteItemGenre key={i}>{element} | </MoviteItemGenre>;
        })}
        <p>{overview}</p>
        <p>{releaseDate}</p>
      </RightCont>
    </MovieItemWrapper>
  );
}

export default MovieItem;

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 3px;
  padding: 20px;
  margin-bottom: 15px;
`;

const LeftCont = styled.div`
  display: inline-block;
`;

const RightCont = styled.div`
  display: inline-block;
`;

const MoviteItemGenre = styled.span`
  color: ${colors.primaryColor};
`;
