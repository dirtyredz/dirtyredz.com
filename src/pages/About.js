import React from 'react'
import { Layout } from '../components'
import get from 'lodash/get'
import { graphql } from 'gatsby'
class About extends React.Component {
  render() {
    const data = get(this, 'props.data')
    return(
      <Layout data={data} location={this.props.location}>
        <h1>About</h1>
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`