import React from 'react'
import { graphql } from 'gatsby'
import { Layout, RedBorderLink, CenterContent } from '../components'

class Resume extends React.Component {
  render() {
    const { data, location } = this.props
    return (
      <Layout data={data} location={location}>
        <CenterContent>
          <h1>Resume</h1>
          <p>Download my current resume with the link below</p>
          <RedBorderLink
            title="Download my resume with this link."
            href={data.Resume.edges[0].node.publicURL}
          >
            Download
          </RedBorderLink>
        </CenterContent>
        <br />
        <br />
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
