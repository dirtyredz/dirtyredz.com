import React from 'react'
import PropTypes from 'prop-types'
import './ParagraphLink.css'
const ParagraphLink = ({children}) => {
  return (
    <span className="ParagraphLink">
      {children}
    </span>
  )
}

ParagraphLink.propTypes = {
}

export default ParagraphLink
