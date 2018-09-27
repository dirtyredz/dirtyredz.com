import 'babel-polyfill'
import React from 'react'
import Provider from './src/Context'

export const wrapRootElement = ({ element, ...rest }) => ( // eslint-disable-line import/prefer-default-export
  <Provider {...rest}>
    {element}
  </Provider>
)
