import React from 'react'
import Img from "gatsby-image";
import "./footer.css";
import { Link } from 'gatsby'
import * as Icons from '../components/icons'
const Footer = props => {
  let SiteLinks = props.InternalLinks ?
    props.InternalLinks.edges
    .filter(link=>{
      if(link.node.path.includes(".html") || link.node.path.includes("/dev") || link.node.path.includes("/404"))
        return false
      return !link.node.path.includes("/blog")
    })
   : null

  const FirstHalf_InternalLinks = SiteLinks.slice(0,SiteLinks.length / 2)
  const SecondHalf_InternalLinks = SiteLinks.slice(SiteLinks.length / 2)
  const ExternalLinks = props.ExternalLinks.map(link=>{
    return {...link, icon: Icons[link.logo]}
  })
  const FirstHalf_ExternalLinks = ExternalLinks.slice(0,ExternalLinks.length / 2)
  const SecondHalf_ExternalLinks = ExternalLinks.slice(ExternalLinks.length / 2)
  return(
    <div id="Footer">
      <div className="IconContainer">
        {FirstHalf_ExternalLinks && FirstHalf_ExternalLinks.map(link=><a key={link.url} style={{boxShadow: "none"}} target="blank" href={link.url}><link.icon className="FooterIcons" width={40}/></a>)}
      </div>
      <ul className="FooterLinks">
        {FirstHalf_InternalLinks && FirstHalf_InternalLinks.map(link=>{
          if(link.node.path == "/")
            return <li key={link.node.path}><Link to={link.node.path}>HOME</Link></li>
          return <li key={link.node.path}><Link to={link.node.path}>{link.node.path.toUpperCase().replace("/","")}</Link></li>
        })}
      </ul>
      {props.logo && <Img
        outerWrapperClassName="Footer_Logo"
        sizes={props.logo.childImageSharp.sizes}
      />}
      <ul className="FooterLinks" style={{textAlign: "right"}}>
        {SecondHalf_InternalLinks && SecondHalf_InternalLinks.map(link=>{
          return <li key={link.node.path} ><Link to={link.node.path}>{link.node.path.toUpperCase().replace("/","")}</Link></li>
        })}
      </ul>
      <div className="IconContainer">
        {SecondHalf_ExternalLinks && SecondHalf_ExternalLinks.map(link=><a key={link.url} style={{boxShadow: "none"}} target="blank" href={link.url}><link.icon className="FooterIcons" width={40}/></a>)}
      </div>
    </div>
  )
}

export default Footer
