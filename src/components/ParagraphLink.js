import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ParagraphLink = ({ children }) => (
  <ParagraphLinkContainer>
    {children}
  </ParagraphLinkContainer>
)

ParagraphLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default ParagraphLink

const ParagraphLinkContainer = styled.span`
  border-bottom: #C10909 solid 2.5px;
  display: inline-block;
  line-height: 1;
  transition: border-bottom 0.5s;
  &:focus, &:hover{
    border-bottom: rgb(0, 211, 248) solid 2.5px;
  }
  & > a{
    text-decoration: none;
    color: inherit;
    &:visited{
      text-decoration: none;
      color: inherit;
    }
  }
`

// h1 > .ParagraphLink,
// h2 > .ParagraphLink,
// h3 > .ParagraphLink,
// h4 > .ParagraphLink,
// h5 > .ParagraphLink,
// h6 > .ParagraphLink{
//   padding-left: 4px;
// }
