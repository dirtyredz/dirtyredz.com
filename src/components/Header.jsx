import React from "react";
import SmallDRLogo from "./SmallDRLogo";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import styled, {injectGlobal} from 'styled-components';

const Nav = styled.header`
  clear: both;
  display: block;
  font-size: 1.3em;
  height: 50px;
  @media print{
    height: 120px;
  }
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
    handleMenuClick(){
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
                <SmallDRLogo/>
                <DesktopNavigation handleMenuClick={this.handleMenuClick.bind(this)} />
                <MobileNavigation MenuToggled={this.state.MenuToggled} handleMenuClick={this.handleMenuClick.bind(this)}/>
            </Nav>
        );
    }
}
