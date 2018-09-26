import React from 'react'
import { Layout, CenterContent, Icons } from '../components'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import './Donate.css'

class Donate extends React.Component {
  render() {
    const data = get(this, 'props.data')
    return(
      <Layout data={data} location={this.props.location}>
        <CenterContent>
          <h1>Donate</h1>
          <div className="FlexMe">
            <div className="Column">
              <a target="_blank" rel="noopener noreferrer" href="https://www.paypal.me/Dirtyredz" className="LogoLink">
                <Icons.Paypal style={{float: 'none', display: 'inline-block'}} width={50} />
              </a>
              <p>
                Wanna help me out? Send me a small donation, I really appreciate it. Thanks
              </p>
            </div>
            <div className="Column">
              <a target="_blank" rel="noopener noreferrer" href="https://www.patreon.com/Dirtyredz" className="LogoLink">
                <Icons.Patreon style={{float: 'none', display: 'inline-block'}} width={50} />
              </a>
              <p>
                I also have a Patreon that you can sign up and become a patron of mine.
              </p>
            </div>
          </div>
        </CenterContent>
        <br/>
        <br/>
        <br/>
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