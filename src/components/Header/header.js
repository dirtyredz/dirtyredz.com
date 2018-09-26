import React from 'react'
import './header.css';
import { Menu, Logo } from '..'

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      Rotated: false,
      ImageStyle: {
        opacity: 0,
      },
    }
    this.ImageLoaded = this.ImageLoaded.bind(this)
  }

  componentWillUnmount() {
    if (this.Timer) {
      clearTimeout(this.Timer)
    }
  }

  ImageLoaded() {
    this.setState({ Rotated: true }, () => {
      this.Timer = setTimeout(() => {
        this.setState({ ImageStyle: { opacity: 100 } })
      }, 500)
    })
  }

  render() {
    const { ImageStyle, Rotated } = this.state
    return (
      <div id="Header">
        <div className="Header_TopBar">
          <Logo
            fadeIn={false}
            imgStyle={ImageStyle}
            className="Header_Logo"
            onLoad={this.ImageLoaded}
          />
          <Menu {...this.props} />
        </div>
        <div
          style={{ transform: `rotateZ(${this.state}deg)` }}
          className={Rotated ? 'Header_BottomBar Rotated' : 'Header_BottomBar'}
        />
      </div>
    )
  }
}

export default Header
