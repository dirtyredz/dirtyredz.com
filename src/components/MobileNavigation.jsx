import React from "react";
import { NavLink } from "react-router-dom"
import styled, {injectGlobal} from 'styled-components';

injectGlobal`
  .Mobile_Nav_Active{
    color: #000;
    pointer-events: none;
  }
`;
const MobileMenu = styled.nav`
  background-color: #8a1315;
  width: 100%;
  position: absolute;
  padding-top: 0;
  z-index: 10;
  left: 1000px;
  margin-top: 50px;
  opacity: 1;
  visibility: hidden;
  transition: left 500ms ease-in-out, visibility 500ms;
  height: calc(100vh - 50px);
`;
const StyledUl = styled.ul`
  width: 100%;
  padding-top: 50px;
  height: 74vh;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
  overflow-y: scroll;
  overflow-x: hidden;
`;
const NavLinkLi = styled.li`
  position: relative;
  width: 100%;
  height: 100px;
  padding-left: 12px;
  @media (max-width: 767px){
    display: block !important;
  }
`;
const ToggleMenu = {
  left: 0,
  visibility: 'visible'
}

export default (props) => {
    return (
        <MobileMenu style={(props.MenuToggled) ? ToggleMenu : {}}>
            <StyledUl>
                <NavLinkLi>
                  <NavLink onClick={props.handleMenuClick} to="/" exact activeClassName="DR_ERROR">HOME</NavLink>
                </NavLinkLi>
                <NavLinkLi>
                  <NavLink onClick={props.handleMenuClick} to="/PROJECTS" exact activeClassName="DR_ERROR">PROJECTS</NavLink>
                </NavLinkLi>
                <NavLinkLi>
                  <NavLink onClick={props.handleMenuClick} to="/DONATE" exact activeClassName="DR_ERROR">DONATE</NavLink>
                </NavLinkLi>
                <NavLinkLi>
                  <NavLink onClick={props.handleMenuClick} to="/ABOUT" exact activeClassName="DR_ERROR">ABOUT</NavLink>
                </NavLinkLi>
                <NavLinkLi>
                  <NavLink onClick={props.handleMenuClick} to="/CONTACT" exact activeClassName="DR_ERROR">CONTACT</NavLink>
                </NavLinkLi>
            </StyledUl>
        </MobileMenu>
    );
}
