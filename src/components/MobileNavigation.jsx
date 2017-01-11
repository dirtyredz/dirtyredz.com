import React from "react";
import { Link } from "react-router"
// import Li from "./Li.jsx";
// import styles from './MobileNavigation.css';
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
  left: ${props => props.MenuToggled ? '0' : '1000px'};
  margin-top: 50px;
  opacity: 1;
  visibility: ${props => props.MenuToggled ? 'visible' : 'hidden'};
  transition: left 500ms ease-in-out, visibility 500ms;
  height: 100vh;
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
const LinkLi = styled.li`
  position: relative;
  width: 100%;
  height: 100px;
  padding-left: 12px;
  @media (max-width: 767px){
    display: block !important;
  }
`;
const StyledLink = styled(Link)`
  padding: 0 20px;
  line-height: 50px;
  display: block;
  font-size: 1em;
  transition: color 0.5s linear;
  -webkit-transition: color 0.5s linear;
  font-weight: bold;
  cursor: pointer;
`;
export default class MobileNavigation extends React.Component {
    render() {
        return (
            <MobileMenu MenuToggled={this.props.MenuToggled}>
                <StyledUl>
                    <LinkLi>
                      <Link onClick={this.props.handleMenuClick} to="/" onlyActiveOnIndex activeClassName="DR_ERROR">HOME</Link>
                    </LinkLi>
                    <LinkLi>
                      <Link onClick={this.props.handleMenuClick} to="/PROJECTS" onlyActiveOnIndex activeClassName="DR_ERROR">PROJECTS</Link>
                    </LinkLi>
                    <LinkLi>
                      <Link onClick={this.props.handleMenuClick} to="/ABOUT" onlyActiveOnIndex activeClassName="DR_ERROR">ABOUT</Link>
                    </LinkLi>
                    <LinkLi>
                      <Link onClick={this.props.handleMenuClick} to="/CONTACT" onlyActiveOnIndex activeClassName="DR_ERROR">CONTACT</Link>
                    </LinkLi>
                </StyledUl>
            </MobileMenu>
        );
    }
}
