import React, { Component } from 'react'
// import styled from 'styled-components'
import { CenterContent } from '.'

export default class CodeDisplay extends Component {
  render() {
    const { children, language } = this.props
    return (
      <CenterContent>
        <pre className={language}>
          <code className={language}>
            {children}
          </code>
        </pre>
      </CenterContent>
    )
  }
}
