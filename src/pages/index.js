import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import { rhythm } from '../utils/typography'

import GreyBox from '../components/greyBox'
import { Timeline } from 'react-twitter-widgets'

import './index.css'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const data = get(this, 'props.data')

    return (
      <Layout data={data} location={this.props.location}>
        <Helmet title={siteTitle} />
        <div className="CenterContent" >
          <h1>Full Stack Developer and Veteran</h1>
          <p>My name is David McClain, I am a web developer currently living in North West Wisconsin area. After serving in the United States Marine Corpse for 9 years, I started my development career.  I enjoy building websites, web apps and mobile apps.  If your a seeking a website or mobile application you can contact me here.  If your an employer looking to hire a developer visit my resume here.</p>
          <Link className="RedBorderButton" to="/Contact">CONTACT ME</Link>
        </div>
        <GreyBox>
          <div className="CenterContent" style={{textAlign: "center"}}>
            <h1>MY LATEST PROJECTS</h1>
            <div style={{height: 100}}></div>
          </div>
          <h4 className="LeftText">See all my projects <span>Here</span></h4>
        </GreyBox>
        <div className="CenterContent" style={{textAlign: "center"}}>
          <h1>MY RECENT BLOG POSTS</h1>
        </div>
        <GreyBox NoBottomEdge>
          <div className="CenterContent" style={{textAlign: "center"}}>
            <h1>TWITTER FEED</h1>
            <Timeline
              dataSource={{
                sourceType: 'profile',
                screenName: 'Dirtyredz_DM'
              }}
              options={{
                height: '400'
              }}
              onLoad={() => console.log('Timeline is loaded!')}
            />
          </div>
        </GreyBox>
        {/* {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })} */}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        links {
          logo
          url
          title
        }
      }
    }
    Logo: file(relativePath: {eq: "digitalredz.png"}) {
      childImageSharp {
        sizes(maxWidth: 340 ) {
          ...GatsbyImageSharpSizes_noBase64
        }
      }
    }
    Links: allSitePage {
      edges {
        node {
          path
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`