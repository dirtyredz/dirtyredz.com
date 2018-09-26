import React from 'react'
import { VerticleButton as ScrollUpButton } from 'react-scroll-up-button'
import { Footer, Header } from '..'
import './layout.css'
import get from 'lodash/get'
import { connect } from 'react-redux';
import Helmet from 'react-helmet'

function mapStateToProps(state) {
  return {
    menu: state.menu,
  };
}

const WithProvider = props => (
  // <Provider store={store}>
  <Layout {...props} />
  // {/* </Provider> */}
)

export default WithProvider

const Layout = connect(mapStateToProps)((props) => {
  const { children } = props
  const title = get(props, 'data.site.siteMetadata.title')
  return (
    <div style={props.menu.isOpen ? { overflow: 'hidden', height: '100vh' } : {}}>
      <ScrollUpButton style={{ zIndex: 1000 }} />
      <Helmet title={title} />
      <Header siteTitle={title} maxWidth={240} />
      {children}
      <Footer siteTitle={title} />
    </div>
  )
})
