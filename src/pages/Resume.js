import React from 'react'
import { Layout, RedBorderLink, CenterContent } from '../components'
import get from 'lodash/get'
import { graphql } from 'gatsby'
class Resume extends React.Component {
  render() {
    const data = get(this, 'props.data')
    return(
      <Layout data={data} location={this.props.location}>
        <CenterContent>
          <h1>Resume</h1>
          <p>Download my current resume with the link below</p>
          <RedBorderLink href={data.Resume.edges[0].node.publicURL}>Download</RedBorderLink>
        </CenterContent>
        <br/>
        <br/>
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
    Resume: allFile(filter: { extension: { eq: "docx" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`