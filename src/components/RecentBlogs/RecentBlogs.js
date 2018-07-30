import React from 'react'
import { Link } from 'gatsby'
import './RecentBlogs.css'
import {BlogsQuery} from '..'

const RecentBlogs = (props) => {
  return (
    <BlogsQuery
      render={data => {
        return (
          <div {...props}>
              {data.map(blog =>(
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
