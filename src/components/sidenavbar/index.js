import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import * as colors from "../../colors";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";

import styled, { css } from "styled-components";

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

function SideNavBar() {
  const [activeSideBar, setActiveSideBar] = useState(true);

  const handleMenuClose = () => {
    setActiveSideBar(!activeSideBar);
  };

  return (
    <>
      <Mobile>{/* Implement a hamburger icon slide in effect for mobile devices */}Mobile</Mobile>
      <Default>
        <SideNavBarCont isVisible={activeSideBar}>
          <SideNavMainLink mainlink={+true} className="menu_nav_link" to="/" activeClassName="active" exact>
            Wesley
            <NavIcon arrow onClick={handleMenuClose}>
              <img src={Arrow} alt="menuArrow" />
            </NavIcon>
          </SideNavMainLink>
          <SideNavMainLink discoverlink={+true} className="menu_nav_link" to="/discover" activeClassName="active">
            Discover
            <NavIcon search>
              <img src={SearchWhite} alt="menuSearch" />
            </NavIcon>
          </SideNavMainLink>
          <SideNavHeader>
            <HeaderText>Watched</HeaderText>
          </SideNavHeader>
          <NavLink className="menu_nav_link" to="/watched/movies" activeClassName="active">
            Movies
          </NavLink>
          <NavLink className="menu_nav_link" to="/watched/tv-shows" activeClassName="active">
            TV Shows
          </NavLink>
          <SideNavHeader>
            <HeaderText>Saved</HeaderText>
          </SideNavHeader>
          <NavLink className="menu_nav_link" to="/saved/movies" activeClassName="active">
            Movies
          </NavLink>
          <NavLink className="menu_nav_link" to="/saved/tv-shows" activeClassName="active">
            TV Shows
          </NavLink>
        </SideNavBarCont>
      </Default>
    </>
  );
}

export default SideNavBar;

const SideNavBarCont = styled.div`
  position: fixed;
  z-index: 9;
  width: 260px;
  height: 100%;
  background-color: ${colors.sideNavBar};
  ${(props) =>
    !props.isVisible &&
    `
    display:none
    `};
`;

const SideNavMainLink = styled(Link)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 35px;
  padding-top: ${(props) => (props.mainlink ? "35px" : "25px")};
  font-size: 1.4em;
  font-weight: ${(props) => (props.mainlink ? "700" : "300")};
  color: white;
  background-color: ${(props) => (props.discoverlink ? colors.primaryColor : colors.sideNavBar)};
`;

const NavIcon = styled.div`
  position: absolute;
  right: 35px;
`;

const SideNavHeader = styled.div`
  padding: 35px 35px;
  padding-bottom: 15px;
  margin-bottom: 15px;
  box-shadow: 35px 1px 1px -1px ${colors.lightBackground};
`;

const HeaderText = styled.div`
  font-size: 1.4em;
  font-weight: 400;
  color: white;
`;

const NavLink = styled(Link)`
  display: block;
  padding-left: 35px;
  color: white;
  font-weight: 300;
  padding-bottom: 10px;
`;
