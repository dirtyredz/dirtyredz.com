import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { Layout, BlogsQuery, CenterContent } from '../components'

class Blog extends React.Component {
  render() {
    const { data, location } = this.props
    return (
      <Layout data={data.x} location={location}>
        <CenterContent>
          <h1>Blog</h1>
          <BlogsQuery
            render={data => (
              <PostsContainer>
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
                      <br />
                    </div>
                  ))
                  : <h2>Blogs Section Coming Soon!</h2>
                    }
              </PostsContainer>
            )}
          />
          <br />
          <br />
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

const PostsContainer = styled.div`
  max-width: 1000px;
  padding: 20px;
  margin: auto;
`
