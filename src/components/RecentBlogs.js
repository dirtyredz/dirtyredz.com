import React from 'react'
import { StaticQuery } from 'gatsby'
const RecentBlogs = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          Blogs: allMarkdownRemark(filter: {fileAbsolutePath: { regex: "/blog/"}}, sort: { fields: [frontmatter___date], order: DESC }) {
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
      `}
      render={data => {
        return (
        <div>
          {data.Blogs.edges.map(blog => <span>{blog.node.frontmatter.title}</span>)}
        </div>
      )}}
    />
  )
}

export default RecentBlogs
