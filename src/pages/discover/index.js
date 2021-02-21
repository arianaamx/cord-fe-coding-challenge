import React, { useState, useEffect } from "react";
import styled from "styled-components";

import * as colors from "../../colors";
import * as fetcher from "../../fetcher";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";

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
    fetcher.getPopularMovies(setResults);
    fetcher.getMovieGenres(setGenreOptions);
  }, []);

  // Write a function to get the movie details based on the movie id taken from the URL.

  const searchMovies = async (keyword, year) => {
    // Write a function to trigger the API request and load the search results based on the keyword and year given as parameters
  };

  return (
    <DiscoverWrapper>
      <MobilePageTitle>{/* Discover {JSON.stringify(popularMovies, null, 2)} */}</MobilePageTitle>
      <MovieFilters>
        <SearchFilters
          genres={genreOptions}
          ratings={ratingOptions}
          languages={languageOptions}
          searchMovies={(keyword, year) => searchMovies(keyword, year)}
        />
      </MovieFilters>
      <MovieResults>
        {totalCount > 0 && <TotalCounter>{totalCount} results</TotalCounter>}
        <MovieList movies={results || []} genres={genreOptions || []} />
        {/* Each movie must have a unique URL and if clicked a pop-up should appear showing the movie details and the action buttons as shown in the wireframe */}
      </MovieResults>
    </DiscoverWrapper>
  );
}

export default Discover;

const DiscoverWrapper = styled.div`
  /* padding: 60px 35px; */
`;

const TotalCounter = styled.div`
  font-weight: 900;
`;

const MovieResults = styled.div``;

const MovieFilters = styled.div``;

const MobilePageTitle = styled.header``;
