import React from 'react'
import { MenuStateChanged } from "../../redux/menu";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { StaticQuery, Link } from "gatsby";
import { slide as BurgerMenu } from 'react-burger-menu'
import './Menu.css'
import { Icons } from '..'
import FlipMove from 'react-flip-move';

function mapStateToProps(state) {
  return {
    menu: state.menu
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ MenuStateChanged }, dispatch);
}
class Menu extends React.Component {
  constructor(){
    super()
    this.state = {
      MenuState: false,
      BlogSubMenuOpen: false,
      ProjectSubMenuOpen: false
    }
  }
  TransformLink(link){
    link = link.replace("/","")
    link = link.replace("blog/","")
    return link//.toUpperCase()
  }
  MenuStateChanged(state){
    this.setState({MenuState: state.isOpen})
    this.props.MenuStateChanged(state.isOpen)
  }
  BlogSubMenu(e){
    e.preventDefault()
    this.setState({BlogSubMenuOpen: !this.state.BlogSubMenuOpen})
  }
  ProjectSubMenu(e){
    e.preventDefault()
    this.setState({ProjectSubMenuOpen: !this.state.ProjectSubMenuOpen})
  }
  render(){
    return (
      <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              links {
                logo
                url
                title
              }
            }
          }
          allSitePage {
            edges {
              node {
                path
                context{
                  title
                }
              }
            }
          }
        }
      `}
      render={data => {

        const BlogPostLinks = data.allSitePage ? data.allSitePage.edges.filter(link=>{
          return link.node.path.includes("/blog/")
        }) : null

        const ProjectLinks = data.allSitePage ? data.allSitePage.edges.filter(link=>{
          return link.node.path.includes("/project/")
        }) : null

        const SiteLinks = data.allSitePage ? data.allSitePage.edges.filter(link=>{
          if(link.node.path == "/")
          return false
          if(link.node.path.includes(".html") || link.node.path.includes("/dev") || link.node.path.includes("/404") || link.node.path.includes("/project/") || link.node.path.includes("/blog/") || link.node.path == "/Projects" || link.node.path == "/Blog")
            return false
          return true
        }) : null

        const HomeTitle = data.allSitePage.edges.filter(link=>link.node.path==="/")[0].node.context.title

        return (
          <BurgerMenu
            isOpen={this.state.MenuState}
            onStateChange={this.MenuStateChanged.bind(this)}
            width={ 300 }
            right
          >
            <Link onClick={this.MenuStateChanged.bind(this,{isOpen: false})} className="MenuLink" to="/">{HomeTitle}</Link>
            {SiteLinks && SiteLinks.map(link=>{
              return <Link key={link.node.path} onClick={this.MenuStateChanged.bind(this,{isOpen: false})} className="MenuLink" to={link.node.path}>{link.node.context.title}</Link>
            })}
            <hr className="LineBreak"/>
            <div className="DropDownLink">
              <Link onClick={this.MenuStateChanged.bind(this,{isOpen: false})} to="/Blog" className="MenuLink">Blog</Link>
              <div className="MenuLink" onClick={this.BlogSubMenu.bind(this)} >
                <span className={this.state.BlogSubMenuOpen ? "active arrow" : "arrow"}></span>
              </div>
            </div>
            <FlipMove
              staggerDurationBy={50}
              maintainContainerHeight={true}
              style={this.state.BlogSubMenuOpen ? {maxHeight: 300} : {maxHeight: 3}}
            >
              {this.state.BlogSubMenuOpen && BlogPostLinks && BlogPostLinks.map(link=>{
                return <Link onClick={this.MenuStateChanged.bind(this,{isOpen: false})} className="MenuLink SubLink" to={link.node.path}>&nbsp;&nbsp;&nbsp;{link.node.context.title}</Link>
              })}
            </FlipMove>
            <div className="DropDownLink">
              <Link onClick={this.MenuStateChanged.bind(this,{isOpen: false})} to="/Projects" className="MenuLink">Projects</Link>
              <div className="MenuLink" onClick={this.ProjectSubMenu.bind(this)} >
                <span className={this.state.ProjectSubMenuOpen ? "active arrow" : "arrow"}></span>
              </div>
            </div>
            <FlipMove
              staggerDurationBy={50}
              maintainContainerHeight={true}
              style={this.state.ProjectSubMenuOpen ? {maxHeight: 300} : {maxHeight: 3}}
            >
              {this.state.ProjectSubMenuOpen && ProjectLinks && ProjectLinks.map(link=>{
                return <Link onClick={this.MenuStateChanged.bind(this,{isOpen: false})} className="MenuLink SubLink" to={link.node.path}>&nbsp;&nbsp;&nbsp;{link.node.context.title}</Link>
              })}
            </FlipMove>
            <hr className="LineBreak"/>
            {data.site.siteMetadata.links && data.site.siteMetadata.links.map(link=>{
              const Logo = Icons[link.logo]
              return <a  key={link.url} className="MenuLink" key={link.url} rel="noopener noreferrer" target="_blank" href={link.url}><Logo style={{fill: "#fff", paddingRight: 10}} width={34}/>{link.title}</a>
            })}
          </BurgerMenu>
      )}}
    />
    )
  }
  
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu)
