import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { ProjectsQuery } from '.'

const Recentprojects = () => (
  <ProjectsQuery
    render={data => (
      <RecentProjectsContainer>
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
      </RecentProjectsContainer>
    )}
  />
)

export default Recentprojects

const RecentProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 50px;
  flex-wrap: wrap;
  &a{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding:  5px 10px;
    color: inherit;
    margin: 5px;
    text-decoration: none;
    border-top: solid #C10909 2px;
    border-bottom: solid #C10909 2px;
    &:visited{
      color: inherit;
    }
    & > h2{
      margin-bottom: 0;
      white-space:nowrap;
    }
  }
`
