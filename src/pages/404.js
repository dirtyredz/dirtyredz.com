import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components'

class NotFoundPage extends React.Component {
  render() {
    const { data, location } = this.props
    return (
      <Layout data={data} location={location}>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query NotFoundPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
