import React, { Component } from 'react'

export default class CenterContent extends Component {
  render() {
    const { children, tag, ...rest } = this.props
    let Comp = 'div'
    if (tag) {
      Comp = tag
    }
    return (
      <Comp className="CenterContent" {...rest}>{children}</Comp>
    )
  }
}
