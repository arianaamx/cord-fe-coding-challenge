import React, { useState } from "react";
import styled from "styled-components";

export default function CheckBox({ isClicked, label, id }) {
  // Create a custom checkbox component
  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <CheckboxCont>
      <InputCheck type="checkbox" title="checkbox" checked={isChecked} onChange={handleInputChange} id={`${id}`} />
      <label className="checbox-label" htmlFor={`${id}`}>
        {label}
      </label>
    </CheckboxCont>
  );
}

const CheckboxCont = styled.div`
  position: relative;

  .checbox-label {
    padding-left: 10px;
  }
`;

const InputCheck = styled.input`
  width: 15px;
  height: 15px;
`;
