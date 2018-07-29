import React from 'react'
import Layout from '../components/layout'
import get from 'lodash/get'
import { graphql } from 'gatsby'
class Contact extends React.Component {
  render() {
    const data = get(this, 'props.data')
    return(
      <Layout data={data} location={this.props.location}>
        <h1>Contact</h1>
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