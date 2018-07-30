import React from 'react'
import { Layout } from '../components'
import get from 'lodash/get'
import { graphql } from 'gatsby'
class Resume extends React.Component {
  render() {
    const data = get(this, 'props.data')
    return(
      <Layout data={data} location={this.props.location}>
        <h1>Resume</h1>
      </Layout>
    )
  }
}

export default Resume

export const pageQuery = graphql`
  query ResumeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`