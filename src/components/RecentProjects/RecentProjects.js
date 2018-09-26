import React from 'react'
import { Link } from 'gatsby'
import './RecentProjects.css'
import { ProjectsQuery } from '..'

const Recentprojects = () => (
  <ProjectsQuery
    render={data => (
      <div id="RecentProjects_Container">
        {data.length > 0
          ? data.map(project => (
            <Link
              key={project.node.frontmatter.title}
              to={project.node.frontmatter.path}
              className="Recentproject_Container"
            >
              <h2>{project.node.frontmatter.title}</h2>
            </Link>
          ))
          : <h2>Projects Section Coming Soon!</h2>
            }
      </div>
    )}
  />
)

export default Recentprojects
