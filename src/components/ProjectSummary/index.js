import React from 'react'
import { GreyBox } from '..'
import { StaticQuery, graphql } from 'gatsby'
import './index.css'
import get from 'lodash/get'

export default (props) => {
  const { children, render } = props
  const Skills = get(props, 'data.markdownRemark.frontmatter.skills')
  return (
    <GreyBox id="ProjectSummary">
      <div id="Description_Skills_Container">
        <p id="Description">
          {children}
        </p>
        <div id="Skills">
          <h4>SKILLS</h4>
          <div>
            {Skills && Skills.map(skill=>{
              return <span>{skill}</span>
            })}
          </div>
        </div>
      </div>
    </GreyBox>
  )
}