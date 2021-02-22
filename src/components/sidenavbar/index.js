import React from "react";
import { NavLink as Link } from "react-router-dom";

import * as colors from "../../colors";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";

import styled from "styled-components";

function SideNavBar({ active, closeMenu }) {
  const handleMenuClose = () => {
    closeMenu(!active);
  };

  return (
    <>
      <SideNavBarCont isVisible={active}>
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
          <HeaderLine></HeaderLine>
        </SideNavHeader>
        <NavLink className="menu_nav_link" to="/watched/movies" activeClassName="active">
          Movies
        </NavLink>
        <NavLink className="menu_nav_link" to="/watched/tv-shows" activeClassName="active">
          TV Shows
        </NavLink>
        <SideNavHeader>
          <HeaderText>Saved</HeaderText>
          <HeaderLine></HeaderLine>
        </SideNavHeader>
        <NavLink className="menu_nav_link" to="/saved/movies" activeClassName="active">
          Movies
        </NavLink>
        <NavLink className="menu_nav_link" to="/saved/tv-shows" activeClassName="active">
          TV Shows
        </NavLink>
      </SideNavBarCont>
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
  transform: ${(props) => (props.isVisible ? `translateX(0)` : `translateX(-100%)`)};
  transition: transform 1s ease;
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
  /* box-shadow: 35px 1px 1px -1px ${colors.lightBackground}; */
`;

const HeaderText = styled.div`
  font-size: 1.4em;
  font-weight: 400;
  color: white;
`;

const NavLink = styled(Link)`
  display: block;
  padding-left: 35px;
  color: ${colors.lightBackground};
  font-weight: 300;
  padding-bottom: 10px;
`;

const HeaderLine = styled.hr`
  margin-right: -35px;
  background-color: ${colors.lightBackground};
  border: 1px solid;
`;
