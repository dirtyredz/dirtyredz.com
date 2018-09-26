import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Layout, GreyBox, ProjectSummary } from '../components'
import { rhythm, scale } from '../utils/typography'
require("prismjs/themes/prism-tomorrow.css")
import './Projects.css'
import rehypeReact from "rehype-react"



class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const data = get(this, 'props.data')
    const { keywords, title, created } = this.props.pageContext

    // Compile the corresponding React Component to the Markdown react html tag
    // Pass both markdown props and template props to the component
    const renderAst = new rehypeReact({
      createElement: React.createElement,
      components: { "project-summary": (props)=><ProjectSummary {...props} {...this.props}/> }
    }).Compiler

    return (
      <Layout data={data} location={this.props.location}>
        <h1 className="CenterContent">{title}</h1>
        <div className="keywords_container">
          {keywords.map(keyword=><span>{keyword}</span>)}
        </div>
        <p
          className="CenterContent"
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
          }}
        >
          {created}
        </p>
        {/* <div className="CenterContent" dangerouslySetInnerHTML={{ __html: post.html }} /> */}
        <div>{renderAst(post.htmlAst)}</div>
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
  query ProjectsBySlug($slug: String!) {
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter{
        skills
      }
    }
  }
`
