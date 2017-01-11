import React from "react";
import { Link } from "react-router"
// import styles from './DesktopNavigation.css';
import styled, { injectGlobal } from 'styled-components'

const DesktopMenu = styled.ul`
  opacity: 1;
  height: 50px;
  transition: opacity 2s;
  float: right;
`;
const LinkLi = styled.li`
  position: relative;
  @media (max-width: 767px){
    display: none;
  }
`;
const StyledLink = styled(Link)`
  padding: 0 20px;
  line-height: 50px;
  display: block;
  font-size: 1em;
  transition: color 0.5s linear;
  font-weight: bold;
  cursor: pointer;

  &:after {
    width: 100%;
    background-color: #8a1315;
    position: absolute;
    content: '';
    height: 0px;
    right: 0;
    top: 0;
    z-index: -1;
    transition: height 0.2s linear;
  }
  &:hover::after{
    width: 100%;
    background-color: #8a1315;
    position: absolute;
    content: '';
    height: 50px;
    right: 0;
    bottom: 0;
  }
`;
const StyledSpan = styled.span`
  padding: 0 20px;
  line-height: 50px;
  display: block;
  font-size: 1em;
  transition: color 0.5s linear;
  font-weight: bold;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;
injectGlobal`
  .Desktop_Nav_Active{
    color: #8a1315;
    pointer-events: none;
  }
`;

export default class DesktopNavigation extends React.Component {
    render() {
        return (
            <nav>
                <DesktopMenu>
                    <LinkLi>
                      <StyledLink to="/" onlyActiveOnIndex activeClassName="Desktop_Nav_Active">HOME</StyledLink>
                    </LinkLi>
                    <LinkLi>
                      <StyledLink to="/Projects" onlyActiveOnIndex activeClassName="Desktop_Nav_Active">PROJECTS</StyledLink>
                    </LinkLi>
                    <LinkLi>
                      <StyledLink to="/About" onlyActiveOnIndex activeClassName="Desktop_Nav_Active">ABOUT</StyledLink>
                    </LinkLi>
                    <LinkLi>
                      <StyledLink to="/Contact" onlyActiveOnIndex activeClassName="Desktop_Nav_Active">CONTACT</StyledLink>
                    </LinkLi>
                    <li>
                      <StyledSpan onClick={this.props.handleMenuClick} >MENU</StyledSpan>
                    </li>
                </DesktopMenu>
            </nav>
        );
    }
}
