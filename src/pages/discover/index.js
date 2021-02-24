import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import * as colors from "../../colors";
import * as fetcher from "../../fetcher";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

function Discover() {
  const [keyword, setKeyword] = useState("");
  const [year, setYear] = useState(0);
  const [results, setResults] = useState([]);
  const [movieDetails, setMovieDetails] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const [genreOptions, setGenreOptions] = useState([]);
  const [ratingOptions, setRatingOptions] = useState([
    { id: 7.5, name: 7.5 },
    { id: 8, name: 8 },
    { id: 8.5, name: 8.5 },
    { id: 9, name: 9 },
    { id: 9.5, name: 9.5 },
    { id: 10, name: 10 },
  ]);
  const [languageOptions, setLanguageOptions] = useState([
    { id: "GR", name: "Greek" },
    { id: "EN", name: "English" },
    { id: "RU", name: "Russian" },
    { id: "PO", name: "Polish" },
  ]);

  // Write a function to preload the popular movies when page loads & get the movie genres
  useEffect(() => {
    fetcher.getPopularMovies(setResults, setTotalCount);
    fetcher.getMovieGenres(setGenreOptions);
  }, []);

  // Write a function to get the movie details based on the movie id taken from the URL.

  const searchMovies = async (keyword, year) => {
    // Write a function to trigger the API request and load the search results based on the keyword and year given as parameters
    if (keyword === "") {
      fetcher.getPopularMovies(setResults, setTotalCount);
    } else {
      fetcher.getSearchMovie(keyword, setResults, setTotalCount);
    }
  };

  return (
    <>
      <Mobile>
        <DiscoverMobileWrapper>
          <MovieFilters>
            <SearchFilters
              genres={genreOptions}
              ratings={ratingOptions}
              languages={languageOptions}
              searchMovies={(keyword, year) => searchMovies(keyword, year)}
            />
          </MovieFilters>
          <MovieResults>
            {totalCount > 0 && <TotalCounter>{totalCount} movies</TotalCounter>}
            <MovieList movies={results || []} genres={genreOptions || []} />
            {/* Each movie must have a unique URL and if clicked a pop-up should appear showing the movie details and the action buttons as shown in the wireframe */}
          </MovieResults>
        </DiscoverMobileWrapper>
      </Mobile>
      <Default>
        {totalCount > 0 && <TotalCounter>{totalCount} results</TotalCounter>}
        <DiscoverWrapper>
          <MovieResults>
            <MovieList movies={results || []} genres={genreOptions || []} />
            {/* Each movie must have a unique URL and if clicked a pop-up should appear showing the movie details and the action buttons as shown in the wireframe */}
          </MovieResults>
          <MovieFilters>
            <SearchFilters
              genres={genreOptions}
              ratings={ratingOptions}
              languages={languageOptions}
              searchMovies={(keyword, year) => searchMovies(keyword, year)}
            />
          </MovieFilters>
        </DiscoverWrapper>
      </Default>
    </>
  );
}

export default Discover;

const DiscoverWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 35px 45px;
  padding-top: 0;
`;

const DiscoverMobileWrapper = styled.div`
  padding: 0 35px;
`;

const TotalCounter = styled.div`
  font-weight: 300;
  padding-top: 35px;
  padding-left: 45px;
  padding-bottom: 10px;
`;

const MovieResults = styled.div`
  flex: 2;
`;

const MovieFilters = styled.div`
  flex: 1;
`;

const MobilePageTitle = styled.header``;
