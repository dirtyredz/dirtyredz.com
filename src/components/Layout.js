/* eslint-disable */
import React from 'react'
import ScrollUpButton from 'react-scroll-up-button'
import { Footer, Header } from '.'
import Helmet from 'react-helmet'
import get from 'lodash.get'
import { consumer } from '../Context'


const Layout = consumer((props) => {
  const { children, data, context } = props
  const title = get(data,'site.siteMetadata.title')

  return (
    <div style={context.isOpen ? { overflow: 'hidden', height: '100vh' } : {}}>
      <ScrollUpButton style={{ zIndex: 1000 }} />
      <Helmet defaultTitle="DigitalRedz" titleTemplate={title}>
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
        <meta name="pinterest-rich-pin" content="false" />
      </Helmet>
      <Header siteTitle={title} maxWidth={240} />
      {children}
      <Footer siteTitle={title} />
    </div>
  )
})

export default Layout
