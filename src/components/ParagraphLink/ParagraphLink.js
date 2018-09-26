import React from 'react'
import PropTypes from 'prop-types'
import './ParagraphLink.css'

const ParagraphLink = ({ children }) => (
  <span className="ParagraphLink">
    {children}
  </span>
)

ParagraphLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default ParagraphLink
