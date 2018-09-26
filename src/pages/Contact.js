import React from 'react'
import { Layout, CenterContent } from '../components'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import './Contact.css'
class Contact extends React.Component {
  render() {
    const data = get(this, 'props.data')
    return(
      <Layout data={data} location={this.props.location}>
        <CenterContent>
          <h1>Contact</h1>
          <p style={{ textAlign: 'left' }}>
            Feel free to contact me with my email below, I look forward to talking with you.
            <br/>
            <br/>
            <a className="email" href="mailto:david.mcclain@dirtyredz.com">david.mcclain@dirtyredz.com</a>
          </p>
        </CenterContent>
        <br/>
        <br/>
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