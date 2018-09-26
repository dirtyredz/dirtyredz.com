import React from 'react'
import { Link } from 'gatsby'
import './RecentBlogs.css'
import { BlogsQuery } from '..'

const RecentBlogs = props => (
  <BlogsQuery
    render={data => (
      <div {...props}>
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
      </div>
    )}
  />
)

export default RecentBlogs
