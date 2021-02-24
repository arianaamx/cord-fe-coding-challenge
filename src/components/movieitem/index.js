import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import * as colors from "../../colors";
import PosterNotAvailable from "../../images/poster-not-found.png";

import styled from "styled-components";

import Popup from "../popup";

function MovieItem({ title, genre, overview, releaseDate, voteAverage, backdropPath, posterPath }) {
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const cutText = (text) => {
    return JSON.stringify(text).substring(1, 150);
  };

  return (
    <>
      {isComponentVisible && (
        <>
          <PopupBackground onClick={() => setIsComponentVisible(false)}></PopupBackground>
          <Popup
            title={title}
            genre={genre}
            overview={overview}
            posterPath={posterPath}
            voteAverage={voteAverage}
            releaseDate={releaseDate}
          />
        </>
      )}
      {/* // The MovieItemWrapper must be linked to the movie details popup */}

      <MovieItemWrapper onClick={() => setIsComponentVisible(true)}>
        <LeftCont>
          <PosterImage
            src={posterPath ? `http://image.tmdb.org/t/p/w500${posterPath}` : PosterNotAvailable}
            alt="Poster image"
          />
        </LeftCont>
        <RightCont isMobile={isMobile}>
          <MovieHeader>
            <MovieTitle isMobile={isMobile}>{title}</MovieTitle>
            <MovieRating isMobile={isMobile}>{voteAverage}</MovieRating>
          </MovieHeader>
          <MovieGenres>
            {genre.map((element, i) => {
              return (
                <MoviteItemGenre isMobile={isMobile} key={i}>
                  {element} {genre[i + 1] ? "| " : ""}
                </MoviteItemGenre>
              );
            })}
          </MovieGenres>
          <p>{isMobile ? cutText(overview) : overview}</p>
          <MovieReleaseDate>{releaseDate}</MovieReleaseDate>
        </RightCont>
      </MovieItemWrapper>
    </>
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
  flex: ${(props) => (props.isMobile ? 2 : 3)};
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
  font-size: ${(props) => (props.isMobile ? "1em" : "1.9em")};
  color: ${colors.sideNavBar};
`;

const MovieRating = styled.span`
  background-color: ${colors.primaryColor};
  color: white;
  padding: 3px 5px;
  border-radius: 4px;
  max-width: 25px;
  max-height: 20px;
  font-size: ${(props) => (props.isMobile ? "1em" : "1em")};
`;

const MovieGenres = styled.div`
  font-size: ${(props) => (props.isMobile ? "0.5em" : "0.9em")};
`;

const MovieReleaseDate = styled.div`
  position: absolute;
  bottom: 0;

  color: ${colors.primaryColor};
  font-weight: 300;
`;

const PopupBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${colors.sideNavBar};
  opacity: 0.4;
  z-index: 99;
`;
