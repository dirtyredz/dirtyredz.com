import React from 'react'
import styled from 'styled-components'

const GreyBox = (props) => {
  const { nobottomedge, children, ...rest } = props
  return (
    <GreyBoxContainer style={nobottomedge ? { paddingBottom: 0 } : {}}>
      <GreyBoxContent {...rest}>
        <GreyBoxUpperEdge />
        {children}
        <GreyBoxBottomEdge />
      </GreyBoxContent>
    </GreyBoxContainer>
  )
}

export default GreyBox

const GreyBoxContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  padding-top: calc(8vw + 25px);
  padding-bottom: calc(8vw + 25px);
  color: #EAE8E8;
`

const GreyBoxContent = styled.div`
  background-color: #413E3E;
  position: relative;
  width: 100%;
  min-height: calc(9vw + 10px);
`

const GreyBoxBottomEdge = styled.div`
  background-color: #413E3E;
  height: 100%;
  transition: transform 0.5s linear;
  position: absolute;
  top: 0;
  right: 0;
  width: 150%;
  z-index: -1;
  box-shadow: 0 8px 10px rgba(0,0,0,0.35);
  transform: rotateZ(-5deg);
  transform-origin: bottom right;
`
const GreyBoxUpperEdge = styled.div`
  background-color: #413E3E;
  height: 100%;
  transition: transform 0.5s linear;
  position: absolute;
  top: 0;
  left: 0;
  width: 150%;
  z-index: -1;
  box-shadow: 0 -8px 10px rgba(0,0,0,0.35);
  transform: rotateZ(-5deg);
  transform-origin: top left;
`
