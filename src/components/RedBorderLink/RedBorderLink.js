import React from 'react'
import { Link } from 'gatsby'
import './RedBorderLink.css'

class RedBorderLink extends React.Component {
  render() {
    const { children, to, ...rest } = this.props
    let LinkComponent = Link
    if (!to) {
      LinkComponent = 'a'
    }
    return(
      <LinkComponent className="RedBorderButton" { ...rest }>{children}</LinkComponent>
    )
  }
}

export default RedBorderLink