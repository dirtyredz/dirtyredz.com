import React from 'react'
import { Layout, ProjectsQuery, CenterContent } from '../components'
import get from 'lodash/get'
import { graphql, Link } from 'gatsby'
class Projects extends React.Component {
  render() {
    const data = get(this, 'props.data')
    return(
      <Layout data={data} location={this.props.location}>
        <CenterContent>
          <h1>Projects</h1>
          <ProjectsQuery
            render={data => {
              return (
                <div id="AllProjects_Container">
                    {data.length > 0
                      ? data.map(project => (
                        <Link key={project.node.frontmatter.title} to={project.node.frontmatter.path} className="Recentproject_Container">
                          <h2>{project.node.frontmatter.title}</h2>
                        </Link>
                      ))
                      : <h2>Projects Coming Soon!</h2>
                    }
                </div>
            )}}
          />
          <br/>
          <br/>
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