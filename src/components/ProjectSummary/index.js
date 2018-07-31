import React from 'react'
import { GreyBox } from '..'
import { StaticQuery, graphql } from 'gatsby'
import './index.css'

export default (props) => {
  const { children, render } = props
  console.log({summary: props})
  return (
    <GreyBox>
      <div>
        <p>
          {children}
        </p>
        <div>
          {props.data.markdownRemark.frontmatter.skills.map(skill=>{
            return <span>{skill}</span>
          })}
        </div>
      </div>
    </GreyBox>
  )
}