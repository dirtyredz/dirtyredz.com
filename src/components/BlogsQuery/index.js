import React from 'react'
import { StaticQuery } from 'gatsby'

const RecentBlogs = (props) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          Blogs: allMarkdownRemark(filter: {fileAbsolutePath: { regex: "/blog/"}}, sort: { fields: [frontmatter___created], order: DESC }) {
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
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
        }
      `}
      render={data=>{
        // Filter allMarkDown blogs to those with an available SiteLink (no 404 markdown pages)
        const NewData = data.Blogs.edges
          .filter(blog => data.allSitePage.edges
            .filter(sitePage => sitePage.node.path == blog.node.frontmatter.path)
            .length > 0)
        return props.render(NewData)
      }}
    />
  )
}

export default RecentBlogs
