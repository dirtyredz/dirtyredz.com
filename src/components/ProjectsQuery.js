import React from 'react'
import { StaticQuery } from 'gatsby'

const ProjectsQuery = (props) => {
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
      {...props}
    />
  )
}

export default ProjectsQuery
