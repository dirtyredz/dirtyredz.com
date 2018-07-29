import React from 'react'
import { StaticQuery, Link } from 'gatsby'
import './RecentProjects.css'

const Recentprojects = () => {
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
      render={data => {
        return (
          <div id="RecentProjects_Container">
              {data.Projects.edges.map(project => {
                const DoesPageExsist = data.allSitePage.edges.filter(sitePage => sitePage.node.path == project.node.frontmatter.path).length > 0
                if(!DoesPageExsist)
                  return null
                return (
                <Link key={project.node.frontmatter.title} to={project.node.frontmatter.path} className="Recentproject_Container">
                  <h2>{project.node.frontmatter.title}</h2>
                </Link>
              )})}
          </div>
      )}}
    />
  )
}

export default Recentprojects
