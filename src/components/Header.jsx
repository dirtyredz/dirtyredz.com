import React from "react";

import Small_DR_Logo from "./Small_DR_Logo";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
// import styles from './Header.css';

import styled, {injectGlobal} from 'styled-components';

const Nav = styled.header`
clear: both;
display: block;
font-size: 1.3em;
height: 50px;
`;
injectGlobal`
  body.OverFlow{
    overflow: hidden;
    padding-right: 12px;
  }
`;

export default class Header extends React.Component {
    constructor(props){
      super(props);
      this.state = {MenuToggled: false};
    }
    handleMenuClick = () =>{
      console.log('Called');
      if(this.state.MenuToggled){
        this.setState({MenuToggled: false});
        document.body.className = '';
      }else{
        this.setState({MenuToggled: true});
        document.body.className = 'OverFlow';
      }
    }
    render() {
        return (
            <Nav>
                <Small_DR_Logo />
                <DesktopNavigation handleMenuClick={this.handleMenuClick} />
                <MobileNavigation MenuToggled={this.state.MenuToggled} handleMenuClick={this.handleMenuClick.bind(this)}/>
            </Nav>
        );
    }
}
