import React from 'react'
import { Link } from 'gatsby'
import './RecentProjects.css'
import ProjectsQuery from './ProjectsQuery'
const Recentprojects = () => {
  return (
    <ProjectsQuery
      render={data => {
        return (
          <div id="RecentProjects_Container">
              {data.map(project => (
                <Link key={project.node.frontmatter.title} to={project.node.frontmatter.path} className="Recentproject_Container">
                  <h2>{project.node.frontmatter.title}</h2>
                </Link>
              ))}
          </div>
      )}}
    />
  )
}

export default Recentprojects
