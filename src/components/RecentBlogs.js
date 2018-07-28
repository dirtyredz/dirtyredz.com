import React from 'react'
import { StaticQuery, Link } from 'gatsby'
import './RecentBlogs.css'
const RecentBlogs = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          Blogs: allMarkdownRemark(limit: 3, filter: {fileAbsolutePath: { regex: "/blog/"}}, sort: { fields: [frontmatter___created], order: DESC }) {
            edges {
              node {
                excerpt
                fields {
                  slug
                }
                frontmatter {
                  created(formatString: "DD MMMM, YYYY")
                  updated(formatString: "DD MMMM, YYYY")
                  title
                  path
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <div>
              {data.Blogs.edges.map(blog => (
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
              ))}
          </div>
      )}}
    />
  )
}

export default RecentBlogs
