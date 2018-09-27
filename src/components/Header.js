import React from 'react'
import styled from 'styled-components'
import { Menu, Logo } from '.'

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
      <HeaderContainer id="Header">
        <HeaderTopBar>
          <StyledLogo
            fadeIn={false}
            imgStyle={ImageStyle}
            onLoad={this.ImageLoaded}
          />
          <Menu {...this.props} />
        </HeaderTopBar>
        <HeaderBottomBar
          style={{ transform: `rotateZ(${this.state}deg)` }}
          Rotated={Rotated}
          className={Rotated ? 'Header_BottomBar Rotated' : 'Header_BottomBar'}
        />
      </HeaderContainer>
    )
  }
}

export default Header

const HeaderContainer = styled.header`
  height: calc(12vw + 115px);
  overflow: hidden;
  position: relative;
  width: 100%;
`

const HeaderTopBar = styled.div`
  background-color: #C10909;
  height: 100px;
`

const HeaderBottomBar = styled.div`
  background-color: #C10909;
  height: 275px;
  margin-top: -175px;
  transition: transform 0.5s linear;
  position: absolute;
  top: 0;
  right: 0;
  width: 150%;
  z-index: -1;
  box-shadow: 0 8px 10px rgba(0,0,0,0.35);
  transform-origin: bottom right;
  transform: ${({ Rotated }) => (Rotated ? 'rotateZ(-5deg)' : 'none')};
`

const StyledLogo = styled(props => <Logo {...props} />)`
  padding: 10px;
  max-width: 340px;
  transition: opacity 0.5s linear;
  float: left;
  width: calc(8vw + 100px);
`;
