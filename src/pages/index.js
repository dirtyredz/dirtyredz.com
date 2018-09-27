import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { Timeline } from 'react-twitter-widgets'
import styled from 'styled-components'
import {
  GreyBox,
  Layout,
  RecentProjects,
  RecentBlogs,
  ParagraphLink,
  CenterContent,
  RedBorderLink,
} from '../components'

const updateTwitterCss = () => {
  const widgetCSS = ''
    + "body{font-family: 'FuturaPT-Light';}"
    + '.u-floatLeft{display: none;}'
    + '.timeline-Tweet-text{color: white; font-size: 20px !important;}';
  let w = document.querySelectorAll('iframe[id^="twitter-widget-"]');
  if (w.length === 0) {
    return false
  }
  w = w[0].contentDocument;
  const s = document.createElement('style');
  s.innerHTML = widgetCSS;
  s.type = 'text/css';
  w.head.appendChild(s);
  return true
}

class Home extends React.Component {
  componentDidUpdate() {
    updateTwitterCss()
  }

  render() {
    const { location, data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout data={data} location={location}>
        <Helmet title={siteTitle} />
        <CenterContent>
          <h1>Full Stack Developer and Veteran</h1>
          <p>
            My name is David McClain, I am a web developer currently living in North West
            Wisconsin area. After serving in the United States Marine Corpse for 9 years,
            I started my development career.  I enjoy building websites, web apps and mobile apps.
            &nbsp;&nbsp;If your a seeking a website or mobile application you can contact me
            &nbsp;<ParagraphLink><Link to="/Contact">here</Link></ParagraphLink>
            .&nbsp;&nbsp;If your an employer looking to hire a developer visit my resume
            &nbsp;<ParagraphLink><Link to="/Resume">here</Link></ParagraphLink>.
          </p>
          <RedBorderLink title="Contact Me" to="/Contact">CONTACT ME</RedBorderLink>
        </CenterContent>
        <GreyBox>
          <CenterContent style={{ textAlign: 'center' }}>
            <h1>MY LATEST PROJECTS</h1>
            <RecentProjects />
          </CenterContent>
          <LeftText>
            See all my projects
            <ParagraphLink><Link to="/Projects">Here</Link></ParagraphLink>
          </LeftText>
        </GreyBox>
        <CenterContent style={{ textAlign: 'center' }}>
          <h1>MY RECENT BLOG POSTS</h1>
          <RecentBlogs />
        </CenterContent>
        <LeftText>See all my blogs <ParagraphLink><Link to="/Blog">Here</Link></ParagraphLink></LeftText>
        <GreyBox nobottomedge>
          <CenterContent style={{ textAlign: 'center' }}>
            <h1>TWITTER FEED</h1>
            <Timeline
              dataSource={{
                sourceType: 'profile',
                screenName: 'DigitalRedz',
              }}
              options={{
                height: '600',
                chrome: 'transparent noheader',
              }}
              onLoad={updateTwitterCss}
            />
          </CenterContent>
        </GreyBox>
      </Layout>
    )
  }
}

export default Home

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const LeftText = styled.h4`
  padding-left: 20px
`
