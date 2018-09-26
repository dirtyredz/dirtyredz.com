import React from 'react'
import { graphql } from 'gatsby'
import { Layout, CenterContent } from '../components'
import { rhythm, scale } from '../utils/typography'
import './blog-post.css'

require('prismjs/themes/prism-twilight.css')

class BlogPostTemplate extends React.Component {
  render() {
    const { data, location } = this.props
    const post = data.markdownRemark
    return (
      <Layout data={data} location={location}>
        <CenterContent tag="h1" className="CenterContent">{post.frontmatter.title}</CenterContent>
        <CenterContent
          tag="p"
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
          }}
        >
          {post.frontmatter.created}
        </CenterContent>
        <CenterContent dangerouslySetInnerHTML={{ __html: post.html }} />
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
