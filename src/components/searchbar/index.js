import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import * as colors from "../../colors";
import SearchIcon from "../../images/search-icon-yellow.png";
import CalendarIcon from "../../images/year-icon.png";
import FilterIcon from "../../images/filter-icon.png";

export default function SearchBar({ searchMovies }) {
  const [keyword, setKeyword] = useState("");
  const [year, setYear] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    searchMovies(keyword, year);
  }, [keyword, year]);

  const handleWordSearch = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <SearchBarWrapper>
      <SearchByWord>
        <img src={SearchIcon} alt="Search" />
        <Input type="text" placeholder="Search for movies" onChange={handleWordSearch} />
        {isMobile ? <img src={FilterIcon} alt="Filter" /> : null}
      </SearchByWord>
      {!isMobile ? (
        <SearchByLetter>
          <img src={CalendarIcon} alt="Sarch" />
          <Input type="text" placeholder="Year of release" />
        </SearchByLetter>
      ) : null}
    </SearchBarWrapper>
  );
}

const SearchBarWrapper = styled.div``;

const SearchByWord = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
  border-bottom: 3px solid ${colors.primaryColor};
  margin-bottom: 15px;
`;

const SearchByLetter = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
  border-bottom: 3px solid ${colors.primaryColor};
`;

const Input = styled.input`
  width: 100%;
  border: none;
  margin-left: 10px;
  outline: none;
  font-size: 1.3em;
  color: ${colors.sideNavBar};

  ::placeholder {
    color: ${colors.primaryColor};
    font-size: 1em;
  }
`;
