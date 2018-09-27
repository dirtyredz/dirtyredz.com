import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Layout, CenterContent } from '../components'

class Contact extends React.Component {
  render() {
    const { data, location } = this.props
    return (
      <Layout data={data} location={location}>
        <CenterContent>
          <h1>Contact</h1>
          <p style={{ textAlign: 'left' }}>
            Feel free to contact me with my email below, I look forward to talking with you.
            <br />
            <br />
            <EmailLink href="mailto:david.mcclain@dirtyredz.com">david.mcclain@dirtyredz.com</EmailLink>
          </p>
        </CenterContent>
        <br />
        <br />
      </Layout>
    )
  }
}

export default Contact

export const pageQuery = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const EmailLink = styled.a`
  text-decoration: none;
  color: #d63e3e;
  font-size: 110%;
`
