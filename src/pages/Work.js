import React from 'react'
import { Layout } from '../components'
import get from 'lodash/get'
import { graphql } from 'gatsby'
class Work extends React.Component {
  render() {
    const data = get(this, 'props.data')
    return(
      <Layout data={data} location={this.props.location}>
        <h1>Work</h1>
      </Layout>
    )
  }
}

export default Work

export const pageQuery = graphql`
  query WorkQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`