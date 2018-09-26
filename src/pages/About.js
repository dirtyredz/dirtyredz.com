import React from 'react'
import { graphql } from 'gatsby'
import { Layout, CenterContent } from '../components'

class About extends React.Component {
  render() {
    const { data, location } = this.props
    return (
      <Layout data={data} location={location}>
        <CenterContent>
          <h1>About</h1>
          <h2>About Section Coming Soon!</h2>
        </CenterContent>
        <br />
        <br />
        <br />
        <br />
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
