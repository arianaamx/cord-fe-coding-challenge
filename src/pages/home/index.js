import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import { AiOutlineMenu } from "react-icons/ai";
import * as colors from "../../colors";

import SideNavBar from "../../components/sidenavbar";

import styled from "styled-components";

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

function Home() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  const [activeSideBar, setActiveSideBar] = useState(isNotMobile ? true : false);

  useEffect(() => {
    if (isMobile === true) {
      setActiveSideBar(false);
    } else {
      setActiveSideBar(true);
    }
  }, [isMobile]);

  const handleMenu = () => {
    setActiveSideBar(!activeSideBar);
  };

  return (
    <>
      <Mobile>
        <SideNavBar active={activeSideBar} closeMenu={setActiveSideBar} />
        <MobileNavigation>
          <AiOutlineMenu size={"3em"} color={colors.sideNavBar} onClick={handleMenu} />
          <NavigationTitle>Discover</NavigationTitle>
        </MobileNavigation>
      </Mobile>
      <Default>
        <SideNavBar active={true} closeMenu={setActiveSideBar} />
      </Default>
    </>
  );
}

const MobileNavigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 35px;
  background-color: ${colors.lightBackground};
`;

const NavigationTitle = styled.h1`
  padding-left: 15px;
`;

export default Home;
