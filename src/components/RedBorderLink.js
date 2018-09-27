import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

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
    const {
      children, to, title, style, ...rest
    } = this.props
    const { fontWeight } = this.state
    let tag = 'a'
    if (to) {
      tag = Link
    }
    return (
      <RedBorderButton
        ref={this.myRef}
        to={to}
        tag={tag}
        style={fontWeight ? { fontWeight, ...style } : { ...style }}
        title={title}
        {...rest}
      >
        {children}
      </RedBorderButton>
    )
  }
}

RedBorderLink.propTypes = {
  title: PropTypes.string.isRequired,
}

export default RedBorderLink

const RedBorderButton = styled(({ tag: Tag, ...rest }) => <Tag {...rest} />)`
  padding: 10px;
  border: #C10909 2px solid;
  color: #000;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  font-weight: 100;
  text-transform: uppercase;
  font-family: 'Roboto';
  transition: background-color 0.5s, font-weight 0.5s;

  &:focus, &:hover{
    background-color: #bfbfbf;
    font-weight: 900;
  }
`;
