import React from 'react'
import { MenuStateChanged } from "../redux/menu";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { StaticQuery, Link } from "gatsby";
import { slide as BurgerMenu } from 'react-burger-menu'
import './Menu.css'
import * as Icons from '../components/icons'
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
      BlogSubMenuOpen: false
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
  render(){
    return (
      <StaticQuery
      query={graphql`
        query {
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
          return link.node.path.includes("/blog")
        }) : null

        const SiteLinks = data.allSitePage ? data.allSitePage.edges.filter(link=>{
          if(link.node.path == "/")
          return false
          if(link.node.path.includes(".html") || link.node.path.includes("/dev") || link.node.path.includes("/404"))
            return false
          return !link.node.path.includes("/blog")
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

            <div onClick={this.BlogSubMenu.bind(this)} >
              <span className="MenuLink" >Blog</span>
                <FlipMove
                  staggerDurationBy={50}
                  maintainContainerHeight={true}
                >
                  {this.state.BlogSubMenuOpen && BlogPostLinks && BlogPostLinks.map(link=>{
                    return <Link onClick={this.MenuStateChanged.bind(this,{isOpen: false})} className="MenuLink" to={link.node.path}>&nbsp;&nbsp;&nbsp;{link.node.context.title}</Link>
                  })}
                </FlipMove>
            </div>
            <hr className="LineBreak"/>
            {this.props.ExternalLinks && this.props.ExternalLinks.map(link=>{
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
