import React from 'react'
import { Layout } from '../components'
import get from 'lodash/get'
import { graphql } from 'gatsby'
class Donate extends React.Component {
  render() {
    const data = get(this, 'props.data')
    return(
      <Layout data={data} location={this.props.location}>
        <h1>Donate</h1>
      </Layout>
    )
  }
}

export default Donate

export const pageQuery = graphql`
  query DonateQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`