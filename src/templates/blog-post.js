import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
import { Layout } from '../components'
import { rhythm, scale } from '../utils/typography'
require("prismjs/themes/prism-twilight.css")
import './blog-post.css'
class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pageContext
    const data = get(this, 'props.data')
    return (
      <Layout data={data} location={this.props.location}>
        <h1 className="CenterContent">{post.frontmatter.title}</h1>
        <p
          className="CenterContent"
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
          }}
        >
          {post.frontmatter.created}
        </p>
        <div className="CenterContent" dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        created(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
