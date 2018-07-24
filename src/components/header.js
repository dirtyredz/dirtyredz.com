import React from 'react'
import Img from "gatsby-image";
import {Link} from "gatsby";
import { slide as Menu } from 'react-burger-menu'
import "./header.css";
import { MenuStateChanged } from "../redux/menu";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
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

class Header extends React.Component {
  constructor(){
    super()
    this.state = {
      Rotated: false,
      ImageStyle: {
        opacity: 0
      },
      MenuState: false,
      BlogSubMenuOpen: false
    }
  }
  ImageLoaded(){
    this.setState({Rotated: true},()=>{
      setTimeout(()=>{
        this.setState({ImageStyle: {opacity: 100}})
      },500)
    })
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
    console.log(this.props)
    const BlogPostLinks = this.props.InternalLinks ? this.props.InternalLinks.edges.filter(link=>{
      return link.node.path.includes("/blog")
    }) : null
    const SiteLinks = this.props.InternalLinks ? this.props.InternalLinks.edges.filter(link=>{
      if(link.node.path == "/")
      return false
      if(link.node.path.includes(".html") || link.node.path.includes("/dev") || link.node.path.includes("/404"))
        return false
      return !link.node.path.includes("/blog")
    }) : null
    return(
      <div id="Header">
        <div className="Header_TopBar">
          {this.props.logo && <Img
            fadeIn={false}
            imgStyle={this.state.ImageStyle}
            outerWrapperClassName="Header_Logo"
            sizes={this.props.logo.childImageSharp.sizes}
            onLoad={this.ImageLoaded.bind(this)}
          />}
          <Menu
            isOpen={this.state.MenuState}
            onStateChange={this.MenuStateChanged.bind(this)}
            width={ 300 }
            right
          >
            <Link onClick={this.MenuStateChanged.bind(this,{isOpen: false})} className="MenuLink" to="/">Home</Link>
            {SiteLinks && SiteLinks.map(link=>{
              return <Link key={link.node.path} onClick={this.MenuStateChanged.bind(this,{isOpen: false})} className="MenuLink" to={link.node.path}>{this.TransformLink(link.node.path)}</Link>
            })}
            <div onClick={this.BlogSubMenu.bind(this)} >
              <span className="MenuLink" >Blog</span>
                <FlipMove
                  staggerDurationBy={50}
                  maintainContainerHeight={true}
                >
                  {this.state.BlogSubMenuOpen && BlogPostLinks && BlogPostLinks.map(link=>{
                    return <Link onClick={this.MenuStateChanged.bind(this,{isOpen: false})} className="MenuLink" to={link.node.path}>&nbsp;&nbsp;&nbsp;{this.TransformLink(link.node.path)}</Link>
                  })}
                </FlipMove>
            </div>
            <hr className="LineBreak"/>
            {this.props.ExternalLinks && this.props.ExternalLinks.map(link=>{
              const Logo = Icons[link.logo]
              return <a  key={link.url} className="MenuLink" key={link.url} rel="noopener noreferrer" target="_blank" href={link.url}><Logo style={{fill: "#fff", paddingRight: 10}} width={34}/>{link.title}</a>
            })}
          </Menu>
        </div>
        <div style={{transform: "rotateZ("+this.state+"deg)"}} className={this.state.Rotated ? "Header_BottomBar Rotated" : "Header_BottomBar"}></div>
      </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)