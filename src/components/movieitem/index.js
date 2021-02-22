import React from "react";

import * as colors from "../../colors";

import styled from "styled-components";

function MovieItem({ title, genre, overview, releaseDate, voteAverage, backdropPath, posterPath }) {
  return (
    // The MovieItemWrapper must be linked to the movie details popup
    <MovieItemWrapper>
      <LeftCont>
        <PosterImage src={`http://image.tmdb.org/t/p/w200${posterPath}`} alt="" />
      </LeftCont>
      <RightCont>
        <MovieHeader>
          <MovieTitle>{title}</MovieTitle>
          <MovieRating>{voteAverage}</MovieRating>
        </MovieHeader>
        <MovieGenres>
          {genre.map((element, i) => {
            return (
              <MoviteItemGenre key={i}>
                {element} {genre[i + 1] ? "| " : ""}
              </MoviteItemGenre>
            );
          })}
        </MovieGenres>
        <p>{overview}</p>
        <MovieReleaseDate>{releaseDate}</MovieReleaseDate>
      </RightCont>
    </MovieItemWrapper>
  );
}

export default MovieItem;

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 3px;
  margin-bottom: 15px;
  padding: 20px 20px;

  display: flex;
  flex-direction: row;
`;

const LeftCont = styled.div`
  flex: 1;
  display: inline-block;
  padding-right: 20px;
`;

const PosterImage = styled.img`
  width: 100%;
  height: auto;
`;

const RightCont = styled.div`
  position: relative;
  flex: 3;
  display: flex;
  flex-direction: column;
`;

const MoviteItemGenre = styled.span`
  color: ${colors.primaryColor};
  font-weight: 800;
`;

const MovieHeader = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
`;

const MovieTitle = styled.span`
  font-weight: 900;
  font-size: 1.9em;
  color: ${colors.sideNavBar};
`;

const MovieRating = styled.span`
  background-color: ${colors.primaryColor};
  color: white;
  padding: 3px 5px;
  border-radius: 4px;
  max-width: 25px;
  max-height: 20px;
`;

const MovieGenres = styled.div``;

const MovieReleaseDate = styled.div`
  position: absolute;
  bottom: 0;

  color: ${colors.primaryColor};
  font-weight: 300;
`;
