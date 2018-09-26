import React from 'react'
import { Layout, BlogsQuery, CenterContent } from '../components'
import get from 'lodash/get'
import { graphql, Link } from 'gatsby'
import './Blog.css'

class Blog extends React.Component {
  render() {
    const x = get(this, 'props.data')
    return(
      <Layout data={x} location={this.props.location}>
        <CenterContent>
          <h1>Blog</h1>
          <BlogsQuery
            render={data => {
              return (
                <div className="PostsContainer">
                    {data.length > 0
                      ? data.map(blog => (
                        <div key={blog.node.frontmatter.title}>
                          <Link to={blog.node.frontmatter.path} className="RecentBlog_Container">
                            <header>
                              <h2>{blog.node.frontmatter.title}</h2>
                              <div className="RecentBlog_Dates">
                                <span>Created:&nbsp;&nbsp;{blog.node.frontmatter.created}</span>
                                <span>Last Updated:&nbsp;&nbsp;{blog.node.frontmatter.updated}</span>
                              </div>
                            </header>
                            <p>{blog.node.excerpt}</p>
                          </Link>
                          <br/>
                        </div>
                      ))
                      : <h2>Blogs Section Coming Soon!</h2>
                    }
                </div>
            )}}
          />
          <br/>
          <br/>
        </CenterContent>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`