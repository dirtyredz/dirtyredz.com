import React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout, ProjectsQuery, CenterContent } from '../components'

class Projects extends React.Component {
  render() {
    const { data, location } = this.props
    return (
      <Layout data={data} location={location}>
        <CenterContent>
          <h1>Projects</h1>
          <ProjectsQuery
            render={data => (
              <div id="AllProjects_Container">
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
                  : <h2>Projects Coming Soon!</h2>
                    }
              </div>
            )}
          />
          <br />
          <br />
        </CenterContent>
      </Layout>
    )
  }
}

export default Projects

export const pageQuery = graphql`
  query ProjectsQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
