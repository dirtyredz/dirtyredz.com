import React from 'react'
import { Link } from 'gatsby'
import './RedBorderLink.css'
import PropTypes from 'prop-types'

class RedBorderLink extends React.Component {
  constructor() {
    super()
    this.state = {
      fontWeight: null,
    }
  }

  componentDidMount() {
    // this.setState({ fontWeight: 100 }, () => {
    //   this.Timer = setTimeout(() => {
    //     this.setState({ fontWeight: null })
    //   }, 500)
    // })
  }

  componentWillUnmount() {
    if (this.Timer) {
      clearTimeout(this.Timer)
    }
  }

  render() {
    const { children, to, title, style, ...rest } = this.props
    const { fontWeight } = this.state
    let LinkComponent = Link
    if (!to) {
      LinkComponent = 'a'
    }
    return(
      <LinkComponent
        ref={this.myRef}
        to={to}
        style={fontWeight ? { fontWeight, ...style } : { ...style }}
        title={title}
        className="RedBorderButton"
        { ...rest }
      >
        {children}
      </LinkComponent>
    )
  }
}

RedBorderLink.propTypes = {
  title: PropTypes.string.isRequired,
}

export default RedBorderLink