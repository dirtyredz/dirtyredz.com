import React from 'react'
import { graphql } from 'gatsby'
import { Layout, CenterContent } from '../components'

class NotFoundPage extends React.Component {
  render() {
    const { data, location } = this.props
    return (
      <Layout data={data} location={location}>
        <br />
        <br />
        <CenterContent>
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </CenterContent>
        <br />
        <br />
        <br />
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
