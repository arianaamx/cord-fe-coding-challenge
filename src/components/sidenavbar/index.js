import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";

import * as colors from "../../colors";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";

import styled, { css } from "styled-components";

function SideNavBar() {
  const [activeSideBar, setActiveSideBar] = useState(true);

  return (
    <SideNavBarCont isVisible={activeSideBar}>
      {/* Implement a hamburger icon slide in effect for mobile devices */}
      <SideNavMainLink className="menu_nav_link main_nav_link" to="/" activeClassName="active" exact>
        Wesley
        <NavIcon arrow>
          <img src={Arrow} alt="menuArrow" />
        </NavIcon>
      </SideNavMainLink>
      <SideNavMainLink className="menu_nav_link" to="/discover" activeClassName="active">
        Discover
        <NavIcon search></NavIcon>
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
        Tv Shows
      </NavLink>
    </SideNavBarCont>
  );
}

export default SideNavBar;

const SideNavBarCont = styled.div`
  position: fixed;
  z-index: 9;
  width: 280px;
  height: 100%;
  background-color: ${colors.sideNavBar}
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
  font-size: 1.6em;
  font-weight: 700;
  color: white;
`;

const NavIcon = styled.div`
  position: absolute;
  right: 35px;
`;

const SideNavHeader = styled.div``;

const HeaderText = styled.div``;

const NavLink = styled(Link)`
  display: block;
`;
