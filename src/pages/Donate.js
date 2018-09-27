import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Layout, CenterContent, Icons } from '../components'

class Donate extends React.Component {
  render() {
    const { location, data } = this.props
    return (
      <Layout data={data} location={location}>
        <CenterContent>
          <h1>Donate</h1>
          <FlexMe>
            <Column>
              <LogoLink
                title="Opens new tab or window to visit my paypal donations page."
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.paypal.me/Dirtyredz"
              >
                <Icons.Paypal style={{ float: 'none', display: 'inline-block' }} width={50} />
              </LogoLink>
              <p>
                Wanna help me out? Send me a small donation, I really appreciate it. Thanks
              </p>
            </Column>
            <Column>
              <LogoLink
                title="Opens new tab or window to visit my patreon page."
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.patreon.com/Dirtyredz"
              >
                <Icons.Patreon style={{ float: 'none', display: 'inline-block' }} width={50} />
              </LogoLink>
              <p>
                I also have a Patreon that you can sign up and become a patron of mine.
              </p>
            </Column>
          </FlexMe>
        </CenterContent>
        <br />
        <br />
        <br />
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

const FlexMe = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`

const Column = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 10px;
`

const LogoLink = styled.a`
  text-align: center;
  transition: fill 0.5s;
  cursor: pointer;
  &:focus, &:hover{
    fill: #c10908;
  }
`
