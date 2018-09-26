import React from 'react'
import Img from "gatsby-image";
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

const Logo = (props) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          Logo: file(relativePath: {eq: "digitalredz.png"}) {
            childImageSharp {
              fluid(maxWidth: 340, maxHeight: 340) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      `}
      render={data => (
        <Img
          {...props}
          fluid={data.Logo.childImageSharp.fluid}
        />
      )}
    />
  )
}

Logo.propTypes = {

}

export default Logo