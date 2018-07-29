import React from 'react'
import Layout from '../components/layout'
import get from 'lodash/get'
import { graphql } from 'gatsby'
class Blog extends React.Component {
  render() {
    const data = get(this, 'props.data')
    return(
      <Layout data={data} location={this.props.location}>
        <h1>Blog</h1>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`