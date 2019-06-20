import React from 'react'
import RehypeReact from 'rehype-react'
import { graphql } from 'gatsby'
import {
  Layout,
  ProjectSummary,
  CenterContent,
  CodeDisplay,
} from '../components'
import { rhythm, scale } from '../utils/typography'
import './Projects.css'

require('prismjs/themes/prism-tomorrow.css')


class BlogPostTemplate extends React.Component {
  render() {
    const { data, pageContext, location } = this.props
    const post = data.markdownRemark
    const { keywords, title, created } = pageContext

    // Compile the corresponding React Component to the Markdown react html tag
    // Pass both markdown props and template props to the component
    const renderAst = new RehypeReact({
      createElement: React.createElement,
      components: {
        'project-summary': props => <ProjectSummary {...this.props} {...props} />,
        'center-content': props => <CenterContent {...props} />,
        'code-display': props => <CodeDisplay {...props} />,
      },
    }).Compiler

    return (
      <Layout data={data} location={location}>
        <CenterContent tag="h1">{title}</CenterContent>
        <div className="keywords_container">
          {keywords.map(keyword => <span>{keyword}</span>)}
        </div>
        <CenterContent
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
          }}
        >
          {created}
        </CenterContent>
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
