/* eslint-disable */
import React from 'react'
import ScrollUpButton from 'react-scroll-up-button'
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

const Layout = connect(mapStateToProps)((props) => {
  const { children } = props
  const title = get(props, 'data.site.siteMetadata.title')
  return (
    <div style={props.menu.isOpen ? { overflow: 'hidden', height: '100vh' } : {}}>
      <ScrollUpButton style={{ zIndex: 1000 }} />
      <Helmet defaultTitle="DigitalRedz" titleTemplate={title}>
        <meta name="twitter:site" content="@digitalredz" />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="DigitalRedz" />
        <html lang="en" />

        <meta charset="utf-8" />
        <title>DigitalRedz</title>
        {/* <!-- Search Engine --> */}
        <meta name="description" content="David McClain Portfolio Website" />
        <meta name="image" content="https://res.cloudinary.com/dirtyredz/image/upload/v1538020948/digitalredzbusinessredesignmetal.jpg" />
        {/* <!-- Schema.org for Google --> */}
        <meta itemprop="name" content="DigitalRedz" />
        <meta itemprop="description" content="David McClain Portfolio Website" />
        <meta itemprop="image" content="https://res.cloudinary.com/dirtyredz/image/upload/v1538020948/digitalredzbusinessredesignmetal.jpg" />
        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="DigitalRedz" />
        <meta name="twitter:description" content="David McClain Portfolio Website" />
        <meta name="twitter:site" content="@digitalredz" />
        <meta name="twitter:creator" content="@digitalredz" />
        <meta name="twitter:image:src" content="https://res.cloudinary.com/dirtyredz/image/upload/v1538020948/digitalredzbusinessredesignmetal.jpg" />
        {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
        <meta name="og:title" content="DigitalRedz" />
        <meta name="og:description" content="David McClain Portfolio Website" />
        <meta name="og:image" content="https://res.cloudinary.com/dirtyredz/image/upload/v1538020948/digitalredzbusinessredesignmetal.jpg" />
        <meta name="og:url" content="https://digitalredz.com" />
        <meta name="og:site_name" content="DigitalRedz" />
        <meta name="og:type" content="website" />
      </Helmet>
      <Header siteTitle={title} maxWidth={240} />
      {children}
      <Footer siteTitle={title} />
    </div>
  )
})

export default Layout
