import React from 'react'
import { Link } from 'gatsby'
import {VerticleButton as ScrollUpButton} from 'react-scroll-up-button'
import Header from '../components/header'
import Footer from '../components/footer'
import './layout.css'
import { rhythm, scale } from '../utils/typography'
import get from 'lodash/get'
import { Provider } from 'react-redux'
import store from '../redux/store'
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    menu: state.menu
  };
}

const WithProvider = props => {
  return (
    <Provider store={store}>
      <Layout {...props}/>
    </Provider>
  )
}

export default WithProvider

const Layout = connect(mapStateToProps)(props=>{
  const { location, children } = props
  const title = get(props, 'data.site.siteMetadata.title')
  const ExternalLinks = get(props, 'data.site.siteMetadata.links')
  const InternalLinks = get(props, 'data.Links')
  const Logo = get(props, 'data.Logo')
  return (
    <div style={props.menu.isOpen ? {overflow: "hidden", height: "100vh"} : {}}>
      <ScrollUpButton style={{zIndex: 1000}}/>
      <Header siteTitle={title} ExternalLinks={ExternalLinks} InternalLinks={InternalLinks} maxWidth={240} logo={Logo}/>
      {children}
      <Footer siteTitle={title} ExternalLinks={ExternalLinks} InternalLinks={InternalLinks} logo={Logo}/>
    </div>
  )
})
