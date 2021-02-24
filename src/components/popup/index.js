import React from "react";
import styled, { css } from "styled-components";
import { useMediaQuery } from "react-responsive";

import * as colors from "../../colors";
import PosterNotAvailable from "../../images/poster-not-found.png";

function Popup({ title, genre, overview, releaseDate, voteAverage, posterPath }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <PopupWrapper isMobile={isMobile}>
      <PopupItemWrapper>
        <LeftCont>
          <PosterImage
            src={posterPath ? `http://image.tmdb.org/t/p/w500${posterPath}` : PosterNotAvailable}
            alt="Poster image"
          />
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
      </PopupItemWrapper>
      <PopupButtons>
        <Button>Watch Offline</Button>
        <Button isDark>Watch Online</Button>
      </PopupButtons>
    </PopupWrapper>
  );
}

export default Popup;

const PopupWrapper = styled.div`
  ${(props) =>
    props.isMobile
      ? css`
          position: fixed;
          left: 15%;
          right: 15%;
          top: 10%;
          bottom: auto;
          margin: auto;
          background: white;
          z-index: 999;
          border-radius: 4px;
        `
      : css`
          position: fixed;
          left: 25%;
          right: 25%;
          top: 25%;
          bottom: auto;
          margin: auto;
          background: white;
          z-index: 999;
          border-radius: 4px;
        `}
`;
const PopupItemWrapper = styled.div`
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

const PopupButtons = styled.div`
  float: right;
  padding: 15px 15px;
  padding-top: 0;
`;

const Button = styled.button`
  padding: 10px 25px;
  margin-left: 10px;
  border-radius: 5px;
  border: 1px solid ${colors.sideNavBar};
  color: ${(props) => (props.isDark ? `${colors.lightBackground}` : `${colors.sideNavBar}`)};
  background-color: ${(props) => (!props.isDark ? `${colors.lightBackground}` : `${colors.sideNavBar}`)};
`;
