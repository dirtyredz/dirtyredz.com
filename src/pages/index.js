import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { rhythm } from '../utils/typography'
import { GreyBox, Layout, RecentProjects, RecentBlogs, ParagraphLink, CenterContent, RedBorderLink } from '../components'
import { Timeline } from 'react-twitter-widgets'
import './index.css'
import { connect } from "react-redux";

class BlogIndex extends React.Component {
  componentDidUpdate(){
    this.updateTwitterCss()
  }
  updateTwitterCss(){
    var widgetCSS = "" +
      "body{font-family: 'FuturaPT-Light';}" +
      ".u-floatLeft{display: none;}" +
      ".timeline-Tweet-text{color: white; font-size: 20px !important;}";
    let w = document.querySelectorAll('iframe[id^="twitter-widget-"]');
    if(w.length == 0)
      return false
    w = w[0].contentDocument;
    var s = document.createElement("style");
    s.innerHTML = widgetCSS;
    s.type = "text/css";
    w.head.appendChild(s);
  }
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const data = get(this, 'props.data')

    return (
      <Layout data={data} location={this.props.location}>
        <Helmet title={siteTitle} />
        <CenterContent>
          <h1>Full Stack Developer and Veteran</h1>
          <p>My name is David McClain, I am a web developer currently living in North West Wisconsin area. After serving in the United States Marine Corpse for 9 years, I started my development career.  I enjoy building websites, web apps and mobile apps.  If your a seeking a website or mobile application you can contact me <ParagraphLink><Link to="/Contact">here</Link></ParagraphLink>.  If your an employer looking to hire a developer visit my resume <ParagraphLink><Link to="/Resume">here</Link></ParagraphLink>.</p>
          <RedBorderLink title="Contact Me" to="/Contact">CONTACT ME</RedBorderLink>
        </CenterContent>
        <GreyBox>
          <CenterContent style={{textAlign: "center"}}>
            <h1>MY LATEST PROJECTS</h1>
            <RecentProjects/>
          </CenterContent>
          <h4 className="LeftText">See all my projects <ParagraphLink><Link to="/Projects">Here</Link></ParagraphLink></h4>
        </GreyBox>
        <CenterContent style={{textAlign: "center"}}>
          <h1>MY RECENT BLOG POSTS</h1>
          <RecentBlogs/>
        </CenterContent>
        <h4 className="LeftText">See all my blogs <ParagraphLink><Link to="/Blog">Here</Link></ParagraphLink></h4>
        <GreyBox nobottomedge>
          <CenterContent style={{textAlign: "center"}}>
            <h1>TWITTER FEED</h1>
            <Timeline
              dataSource={{
                sourceType: 'profile',
                screenName: 'DigitalRedz'
              }}
              options={{
                height: '600',
                chrome: 'transparent noheader',
              }}
              onLoad={this.updateTwitterCss}
            />
          </CenterContent>
        </GreyBox>
      </Layout>
    )
  }
}

export default connect()(BlogIndex)

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`