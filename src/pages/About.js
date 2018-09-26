import React from 'react'
import { Layout, CenterContent } from '../components'
import get from 'lodash/get'
import { graphql } from 'gatsby'

class About extends React.Component {
  render() {
    const data = get(this, 'props.data')
    return(
      <Layout data={data} location={this.props.location}>
        <CenterContent>
          <h1>About</h1>
          <h2>About Section Coming Soon!</h2>
        </CenterContent>
        <br/>
        <br/>
        <br/>
        <br/>
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