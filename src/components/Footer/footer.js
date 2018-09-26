import React from 'react'
import './footer.css';
import { Link, StaticQuery, graphql } from 'gatsby'
import { Logo, Icons } from '..'

const Footer = () => (
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
      const SiteLinks = data.allSitePage
        ? data.allSitePage.edges
          .filter((link) => {
            if (link.node.path.includes('.html')
              || link.node.path.includes('/dev')
              || link.node.path.includes('/404')
              || link.node.path.includes('/project/')
              || link.node.path.includes('/blog/')
              || link.node.path === '/Projects'
              || link.node.path === '/Blog'
              || link.node.path === '/Resume') return false
            return true
          })
        : null

      const FirstHalfInternalLinks = SiteLinks.slice(0, SiteLinks.length / 2)
      const SecondHalfInternalLinks = SiteLinks.slice(SiteLinks.length / 2)


      const ExternalLinks = data.site.siteMetadata.links.map(link => ({ ...link, icon: Icons[link.logo] }))
      const FirstHalfExternalLinks = ExternalLinks.slice(0, ExternalLinks.length / 2)
      const SecondHalfExternalLinks = ExternalLinks.slice(ExternalLinks.length / 2)
      return (
        <div id="Footer">
          <div className="IconContainer">
            {FirstHalfExternalLinks
              && FirstHalfExternalLinks.map(link => (
                <a
                  key={link.url}
                  style={{ boxShadow: 'none' }}
                  target="blank"
                  href={link.url}
                >
                  <link.icon disableClass className="FooterIcons" width={40} />
                </a>
              ))}
          </div>
          <ul className="FooterLinks">
            {FirstHalfInternalLinks
              && FirstHalfInternalLinks.map(link => (
                <li key={link.node.path}>
                  <Link to={link.node.path}>{link.node.context.title}</Link>
                </li>
              ))}
          </ul>
          <Logo className="Footer_Logo" />
          <ul className="FooterLinks" style={{ textAlign: 'right' }}>
            {SecondHalfInternalLinks
              && SecondHalfInternalLinks.map(link => (
                <li key={link.node.path}>
                  <Link to={link.node.path}>{link.node.context.title}</Link>
                </li>
              ))}
          </ul>
          <div className="IconContainer">
            {SecondHalfExternalLinks
              && SecondHalfExternalLinks.map(link => (
                <a
                  key={link.url}
                  style={{ boxShadow: 'none' }}
                  target="blank"
                  href={link.url}
                >
                  <link.icon disableClass className="FooterIcons" width={40} />
                </a>
              ))}
          </div>
        </div>
      )
    }}
  />
)

export default Footer
