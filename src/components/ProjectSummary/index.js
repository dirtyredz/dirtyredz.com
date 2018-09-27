import React from 'react'
import { GreyBox } from '..'
import './index.css'

export default (props) => {
  const { children, data } = props
  const Skills = data.markdownRemark.frontmatter.skills
  return (
    <GreyBox id="ProjectSummary">
      <div id="Description_Skills_Container">
        <p id="Description">
          {children}
        </p>
        <div id="Skills">
          <h4>SKILLS</h4>
          <div>
            {Skills && Skills.map(skill => <span>{skill}</span>)}
          </div>
        </div>
      </div>
    </GreyBox>
  )
}
