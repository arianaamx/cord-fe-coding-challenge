import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import Checkbox from "../../components/checkbox";

export default function ExpandableFilters({ options, title }) {
  const [filtersShown, setFilterShown] = useState(false);

  const handleOnClickChange = () => {
    setFilterShown(!filtersShown);
  };

  return (
    <ExpandableFiltersWrapper>
      <ExpandableFiltersTitleCont>
        {filtersShown ? (
          <AiOutlineMinus onClick={handleOnClickChange} size={"1.3em"} />
        ) : (
          <AiOutlinePlus onClick={handleOnClickChange} size={"1.3em"} />
        )}
        <ExpandableFiltersTitle> Select {title}</ExpandableFiltersTitle>
      </ExpandableFiltersTitleCont>
      <ExpandableFiltersOptions isOpen={filtersShown}>
        {options.map((element) => {
          return (
            <OptionsChecboxWrapper>
              <Checkbox key={element.id} label={element.name} id={element.id} />
            </OptionsChecboxWrapper>
          );
        })}
      </ExpandableFiltersOptions>
    </ExpandableFiltersWrapper>
  );

  // You need to create your own checkbox component with a custom checkmark
}

const ExpandableFiltersWrapper = styled.div`
  padding-bottom: 15px;
`;

const ExpandableFiltersTitleCont = styled.div`
  display: flex;
  font-weight: 700;
`;

const ExpandableFiltersTitle = styled.span`
  padding-left: 10px;
`;

const ExpandableFiltersOptions = styled.div`
  ${(props) => (props.isOpen ? "" : `display:none`)}
  padding-top: 20px;
`;

const OptionsChecboxWrapper = styled.div`
  padding-bottom: 10px;
`;
