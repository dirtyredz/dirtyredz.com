import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby';
import { slide as BurgerMenu } from 'react-burger-menu'
import styled, { css } from 'styled-components'
import './Menu.css'
import FlipMove from 'react-flip-move';
import { ProjectsQuery, BlogsQuery, Icons } from '..'
import { consumer } from '../../Context'

class Menu extends React.Component {
  constructor() {
    super()
    this.state = {
      MenuState: false,
      BlogSubMenuOpen: false,
      ProjectSubMenuOpen: false,
    }
    this.BlogSubMenu = this.BlogSubMenu.bind(this)
    this.ProjectSubMenu = this.ProjectSubMenu.bind(this)
  }

  MenuStateChanged(state) {
    const { context } = this.props
    this.setState({ MenuState: state.isOpen })
    context.toggleMenu(state.isOpen)
  }

  BlogSubMenu(e) {
    const { BlogSubMenuOpen } = this.state
    e.preventDefault()
    this.setState({ BlogSubMenuOpen: !BlogSubMenuOpen })
  }

  ProjectSubMenu(e) {
    const { ProjectSubMenuOpen } = this.state
    e.preventDefault()
    this.setState({ ProjectSubMenuOpen: !ProjectSubMenuOpen })
  }

  render() {
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
        render={(data) => {
          const BlogPostLinks = data.allSitePage
            ? data.allSitePage.edges.filter(link => link.node.path.includes('/blog/'))
            : null

          const ProjectLinks = data.allSitePage
            ? data.allSitePage.edges.filter(link => link.node.path.includes('/project/'))
            : null

          const SiteLinks = data.allSitePage ? data.allSitePage.edges.filter((link) => {
            if (link.node.path === '/') return false
            if (link.node.path.includes('.html')
            || link.node.path.includes('/dev')
            || link.node.path.includes('/404')
            || link.node.path.includes('/project/')
            || link.node.path.includes('/blog/')
            || link.node.path === '/Projects'
            || link.node.path === '/Blog') return false
            return true
          }) : null

          const HomeTitle = data.allSitePage.edges.filter(link => link.node.path === '/')[0].node.context.title
          const { MenuState, BlogSubMenuOpen, ProjectSubMenuOpen } = this.state

          return (
            <BurgerMenu
              isOpen={MenuState}
              onStateChange={this.MenuStateChanged.bind(this)} // eslint-disable-line react/jsx-no-bind
              width={300}
              right
            >
              <InternalMenuLink
                onClick={this.MenuStateChanged.bind(this, { isOpen: false })} // eslint-disable-line react/jsx-no-bind
                to="/"
              >
                {HomeTitle}
              </InternalMenuLink>
              {SiteLinks
                && SiteLinks.map(link => (
                  <InternalMenuLink
                    key={link.node.path}
                    onClick={this.MenuStateChanged.bind(this, { isOpen: false })} // eslint-disable-line react/jsx-no-bind
                    to={link.node.path}
                  >
                    {link.node.context.title}
                  </InternalMenuLink>
                ))}
              <LineBreak />
              <BlogsQuery
                render={(data) => {
                  if (data.length === 0) {
                    return null
                  }
                  return (
                    <div>
                      <MenuDropDownLink>
                        <InternalMenuLink
                          onClick={this.MenuStateChanged.bind(this, { isOpen: false })} // eslint-disable-line react/jsx-no-bind
                          to="/Blog"
                        >
                          Blog
                        </InternalMenuLink>
                        <MenuLink
                          role="button"
                          tabIndex={0}
                          className="MenuLink"
                          onClick={this.BlogSubMenu}
                          onKeyPress={this.BlogSubMenu}
                        >
                          <MenuArrow active={BlogSubMenuOpen} />
                        </MenuLink>
                      </MenuDropDownLink>
                      <FlipMove
                        staggerDurationBy={50}
                        maintainContainerHeight
                        style={BlogSubMenuOpen ? { maxHeight: 300 } : { maxHeight: 3 }}
                      >
                        {BlogSubMenuOpen
                          && BlogPostLinks
                        && BlogPostLinks.map(link => (
                          <SubLink
                            onClick={this.MenuStateChanged.bind(this, { isOpen: false })} // eslint-disable-line react/jsx-no-bind
                            to={link.node.path}
                          >
                            &nbsp;&nbsp;&nbsp;{link.node.context.title}
                          </SubLink>
                        ))}
                      </FlipMove>
                    </div>
                  )
                }}
              />

              <ProjectsQuery
                render={(data) => {
                  if (data.length === 0) {
                    return null
                  }
                  return (
                    <div>
                      <MenuDropDownLink>
                        <InternalMenuLink
                          onClick={this.MenuStateChanged.bind(this, { isOpen: false })} // eslint-disable-line react/jsx-no-bind
                          to="/Projects"
                        >
                          Projects
                        </InternalMenuLink>
                        <MenuLink
                          role="button"
                          tabIndex={0}
                          onClick={this.ProjectSubMenu}
                          onKeyPress={this.ProjectSubMenu}
                        >
                          <MenuArrow active={ProjectSubMenuOpen} />
                        </MenuLink>
                      </MenuDropDownLink>
                      <FlipMove
                        staggerDurationBy={50}
                        maintainContainerHeight
                        style={ProjectSubMenuOpen ? { maxHeight: 300 } : { maxHeight: 3 }}
                      >
                        {ProjectSubMenuOpen && ProjectLinks && ProjectLinks.map(link => (
                          <SubLink
                            onClick={this.MenuStateChanged.bind(this, { isOpen: false })} // eslint-disable-line react/jsx-no-bind
                            to={link.node.path}
                          >
                            &nbsp;&nbsp;&nbsp;{link.node.context.title}
                          </SubLink>
                        ))}
                      </FlipMove>
                    </div>
                  )
                }}
              />
              <LineBreak />
              {data.site.siteMetadata.links && data.site.siteMetadata.links.map((link) => {
                const Logo = Icons[link.logo]
                return (
                  <ExternalMenuLink
                    key={link.url}
                    rel="noopener noreferrer"
                    target="_blank"
                    href={link.url}
                  >
                    <Logo
                      style={{ fill: '#fff', paddingRight: 10 }}
                      width={34}
                    />
                    {link.title}
                  </ExternalMenuLink>
                )
              })}
            </BurgerMenu>
          )
        }}
      />
    )
  }
}

export default consumer(Menu)


const LineBreak = styled.hr`
  background: rgb(0,0,0);
  border: 0;
  content: "";
  display: block;
  height: 1px;
  margin: 0;
  margin-bottom: 8px;
  margin-top: 8px;
`
const MainMenuLink = css`
  text-decoration: none;
  padding-top: 5px !important;
  padding-bottom: 5px !important;
  padding: 3px;
  cursor: pointer;
  color: white;
  overflow: hidden;
  outline: none;
  display: block;
`

const MenuLink = styled.div`
  ${MainMenuLink}

  & span{
    padding: 3px;
    cursor: pointer;
    padding-top: 10px !important;
    padding-bottom: 10px !important;
  }
  & ul{
    padding-top: 5px;
  }
`

const InternalMenuLink = styled(Link)`
  ${MainMenuLink}

  &:visited{
    color: white;
  }
  &:focus, &:hover{
    background-color: rgba(0,0,0,0.15);
  }
`

const ExternalMenuLink = styled.a`
  ${MainMenuLink}

  &:visited{
    color: white;
  }
  &:focus, &:hover{
    background-color: rgba(0,0,0,0.15);
  }
`

const SubLink = styled(InternalMenuLink)`
  font-size: 75%;
`

const MenuArrow = styled.span`
  width: 13px;
  height: 13px;
  display: inline-block;
  position: relative;
  bottom: -5px;
  left: -6px;
  transition: 0.4s ease;
  margin-top: 2px;
  text-align: left;
  transform: ${({ active }) => (active ? 'rotate(45deg) translate(-5px,-5px)' : 'rotate(45deg)')};
  float: right;

  &:before, &:after{
    position: absolute;
    content: '';
    display: inline-block;
    width: 12px;
    height: 3px;
    background-color: #fff;
    transition: 0.4s ease;
  }
  &:before{
    transform: ${({ active }) => (active ? 'translate(10px,0)' : 'none')};
  }
  &:after{
    position: absolute;
    transform: ${({ active }) => (active ? 'rotate(90deg) translate(10px,0)' : 'rotate(90deg)')};
    top: 4.5px;
    left: 9px;
  }
`

const MenuDropDownLink = styled.div`
  display: flex !important;
  justify-content: space-between;

  & > a{
    flex: 1;
  }
  & > div{
    flex: 0.5;
    display: flex;
    justify-content: center;
  }
`
