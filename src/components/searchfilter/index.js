import React from "react";
import styled, { css } from "styled-components";
import { useMediaQuery } from "react-responsive";

import ExpandableFilters from "../../components/expandablefilters";
import SearchBar from "../../components/searchbar";

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

function SearchFilters({ genres, ratings, languages, searchMovies }) {
  return (
    <>
      <Mobile>
        <SearchFiltersContMobile marginBottom>
          {/* Implement a SearchBar component and use it for both the keyword and the year inputs */}
          <SearchBar searchMovies={searchMovies} />
        </SearchFiltersContMobile>
      </Mobile>

      <Default>
        <FiltersWrapper>
          <SearchFiltersCont className="search_inputs_cont" marginBottom>
            {/* Implement a SearchBar component and use it for both the keyword and the year inputs */}
            <SearchBar searchMovies={searchMovies} />
          </SearchFiltersCont>
          <SearchFiltersCont>
            <CategoryTitle>Movie</CategoryTitle>
            {/* Implement a component called "ExpandableFilters" and use it for the filter categories */}
            <ExpandableFilters options={genres} title={`genres(s)`} />
            <ExpandableFilters options={ratings} title={"min. vote"} />
            <ExpandableFilters options={languages} title={"languages"} />
          </SearchFiltersCont>
        </FiltersWrapper>
      </Default>
    </>
  );
}
export default SearchFilters;

const FiltersWrapper = styled.div`
  position: relative;
`;

const SearchFiltersCont = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 15px;
    `}
`;

const SearchFiltersContMobile = styled.div`
  padding: 20px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 15px;
    `}
`;

const CategoryTitle = styled.p`
  margin: 0 0;
  margin-bottom: 10px;
  font-weight: 900;
`;
