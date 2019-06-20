import React, { Component } from 'react'
import styled from 'styled-components'

export default class CenterContent extends Component {
  render() {
    const { children, tag, ...rest } = this.props
    console.log(children)
    return (
      <CenterContentComponent tag={tag || 'div'} {...rest}>{children}</CenterContentComponent>
    )
  }
}

const CenterContentComponent = styled(props => <props.tag {...props} />)`
  max-width: 1000px;
  margin: auto;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
`;
