import React from 'react'
import "./header.css";
import { Menu, Logo } from '..'
class Header extends React.Component {
  constructor(){
    super()
    this.state = {
      Rotated: false,
      ImageStyle: {
        opacity: 0
      },
      MenuState: false,
      BlogSubMenuOpen: false
    }
  }
  ImageLoaded(){
    this.setState({Rotated: true},()=>{
      setTimeout(()=>{
        this.setState({ImageStyle: {opacity: 100}})
      },500)
    })
  }

  render(){
    return(
      <div id="Header">
        <div className="Header_TopBar">
          <Logo
            fadeIn={false}
            imgStyle={this.state.ImageStyle}
            outerWrapperClassName="Header_Logo"
            onLoad={this.ImageLoaded.bind(this)}
          />
          <Menu {...this.props}/>
        </div>
        <div style={{transform: "rotateZ("+this.state+"deg)"}} className={this.state.Rotated ? "Header_BottomBar Rotated" : "Header_BottomBar"}></div>
      </div>
    )
  }
}

export default Header