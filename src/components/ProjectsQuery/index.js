import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default (props) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          Projects: allMarkdownRemark(limit: 3, filter: {fileAbsolutePath: { regex: "/project/"}}, sort: { fields: [frontmatter___created], order: DESC }) {
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
        // Filter allMarkDown projects to those with an available SiteLink (no 404 markdown pages)
        const NewData = data.Projects.edges
          .filter(project => data.allSitePage.edges
            .filter(sitePage => sitePage.node.path == project.node.frontmatter.path)
            .length > 0)
        return props.render(NewData)
      }}
    />
  )
}
