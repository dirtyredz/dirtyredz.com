import React from 'react'
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby'

const Logo = props => (
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

export default Logo
