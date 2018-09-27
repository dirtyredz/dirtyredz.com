import React from 'react'
import styled from 'styled-components'
import { GreyBox } from '.'

export default (props) => {
  const { children, data } = props
  const Skills = data.markdownRemark.frontmatter.skills
  return (
    <GreyBox id="ProjectSummary">
      <ProjectContainer>
        <DescriptionContainer>
          {children}
        </DescriptionContainer>
        <SkillsContainer>
          <h4>SKILLS</h4>
          <div>
            {Skills && Skills.map(skill => <span>{skill}</span>)}
          </div>
        </SkillsContainer>
      </ProjectContainer>
    </GreyBox>
  )
}

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 20px 10px;
  max-width: 1000px;
  justify-content: space-between;
  margin: auto;
`

const DescriptionContainer = styled.p`
  flex: 1;
  margin: 0;
  width: 50%;
`

const SkillsContainer = styled.div`
  flex: 1;
  width: 50%;
  & > div{
    flex-direction: row;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    & > span{
      padding: 3px 15px;
    }
  }
  & > h4{
    text-align: center;
    width: 100%;
  }
`
