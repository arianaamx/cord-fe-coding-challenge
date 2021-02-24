import React from "react";
import styled from "styled-components";

import * as colors from "../../colors";

function Popup({ title }) {
  return <PopupWrapper>{title}</PopupWrapper>;
}

export default Popup;

const PopupWrapper = styled.div`
  position: fixed;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  background: white;
  z-index: 999;
`;
