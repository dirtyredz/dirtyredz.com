import React from 'react'
import Img from "gatsby-image";
import PropTypes from 'prop-types'
import { StaticQuery } from 'gatsby'

const Logo = (props) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          Logo: file(relativePath: {eq: "digitalredz.png"}) {
            childImageSharp {
              sizes(maxWidth: 340 ) {
                ...GatsbyImageSharpSizes_noBase64
              }
            }
          }
        }
      `}
      render={data =>(
        <Img
          {...props}
          sizes={data.Logo.childImageSharp.sizes}
        />
      )}
    />
  )
}

Logo.propTypes = {

}

export default Logo