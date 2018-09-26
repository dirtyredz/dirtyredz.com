import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StaticQuery, Link, graphql } from 'gatsby';
import { slide as BurgerMenu } from 'react-burger-menu'
import './Menu.css'
import FlipMove from 'react-flip-move';
import { MenuStateChanged } from '../../redux/menu';
import { ProjectsQuery, BlogsQuery, Icons } from '..'

function mapStateToProps(state) {
  return {
    menu: state.menu,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ MenuStateChanged }, dispatch);
}

class Menu extends React.Component {
  constructor() {
    super()
    this.state = {
      MenuState: false,
      BlogSubMenuOpen: false,
      ProjectSubMenuOpen: false,
    }
  }

  MenuStateChanged(state) {
    const { MenuStateChanged } = this.props
    this.setState({ MenuState: state.isOpen })
    MenuStateChanged(state.isOpen)
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
              <Link
                onClick={this.MenuStateChanged.bind(this, { isOpen: false })} // eslint-disable-line react/jsx-no-bind
                className="MenuLink"
                to="/"
              >
                {HomeTitle}
              </Link>
              {SiteLinks
                && SiteLinks.map(link => (
                  <Link
                    key={link.node.path}
                    onClick={this.MenuStateChanged.bind(this, { isOpen: false })} // eslint-disable-line react/jsx-no-bind
                    className="MenuLink"
                    to={link.node.path}
                  >
                    {link.node.context.title}
                  </Link>
                ))}
              <hr className="LineBreak" />
              <BlogsQuery
                render={(data) => {
                  if (data.length === 0) {
                    return null
                  }
                  return (
                    <div>
                      <div className="DropDownLink">
                        <Link
                          onClick={this.MenuStateChanged.bind(this, { isOpen: false })} // eslint-disable-line react/jsx-no-bind
                          to="/Blog"
                          className="MenuLink"
                        >
                          Blog
                        </Link>
                        <div
                          role="button"
                          tabIndex={0}
                          className="MenuLink"
                          onClick={this.BlogSubMenu.bind(this)}
                          onKeyPress={this.BlogSubMenu.bind(this)}
                        >
                          <span className={BlogSubMenuOpen ? 'active arrow' : 'arrow'} />
                        </div>
                      </div>
                      <FlipMove
                        staggerDurationBy={50}
                        maintainContainerHeight
                        style={BlogSubMenuOpen ? { maxHeight: 300 } : { maxHeight: 3 }}
                      >
                        {BlogSubMenuOpen
                          && BlogPostLinks
                        && BlogPostLinks.map(link => (
                          <Link
                            onClick={this.MenuStateChanged.bind(this, { isOpen: false })} // eslint-disable-line react/jsx-no-bind
                            className="MenuLink SubLink"
                            to={link.node.path}
                          >
                            &nbsp;&nbsp;&nbsp;{link.node.context.title}
                          </Link>
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
                      <div className="DropDownLink">
                        <Link
                          onClick={this.MenuStateChanged.bind(this, { isOpen: false })} // eslint-disable-line react/jsx-no-bind
                          to="/Projects"
                          className="MenuLink"
                        >
                          Projects
                        </Link>
                        <div
                          role="button"
                          tabIndex={0}
                          className="MenuLink"
                          onClick={this.ProjectSubMenu.bind(this)}
                          onKeyPress={this.ProjectSubMenu.bind(this)}
                        >
                          <span className={ProjectSubMenuOpen ? 'active arrow' : 'arrow'} />
                        </div>
                      </div>
                      <FlipMove
                        staggerDurationBy={50}
                        maintainContainerHeight
                        style={ProjectSubMenuOpen ? { maxHeight: 300 } : { maxHeight: 3 }}
                      >
                        {ProjectSubMenuOpen && ProjectLinks && ProjectLinks.map(link => (
                          <Link
                            onClick={this.MenuStateChanged.bind(this, { isOpen: false })} // eslint-disable-line react/jsx-no-bind
                            className="MenuLink SubLink"
                            to={link.node.path}
                          >
                            &nbsp;&nbsp;&nbsp;{link.node.context.title}
                          </Link>
                        ))}
                      </FlipMove>
                    </div>
                  )
                }}
              />
              <hr className="LineBreak" />
              {data.site.siteMetadata.links && data.site.siteMetadata.links.map((link) => {
                const Logo = Icons[link.logo]
                return (
                  <a
                    key={link.url}
                    className="MenuLink"
                    rel="noopener noreferrer"
                    target="_blank"
                    href={link.url}
                  >
                    <Logo
                      style={{ fill: '#fff', paddingRight: 10 }}
                      width={34}
                    />
                    {link.title}
                  </a>
                )
              })}
            </BurgerMenu>
          )
        }}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
