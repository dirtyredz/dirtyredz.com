import React from 'react'
import styled from 'styled-components'
import { Link, StaticQuery, graphql } from 'gatsby'
import { Logo, Icons } from '.'

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
        <FooterContainer id="Footer">
          <FooterIconContainer>
            {FirstHalfExternalLinks
              && FirstHalfExternalLinks.map(link => (
                <a
                  key={link.url}
                  style={{ boxShadow: 'none' }}
                  target="blank"
                  href={link.url}
                >
                  <DynamicIcon icon={link.icon} disableClass className="FooterIcons" width={40} />
                </a>
              ))}
          </FooterIconContainer>
          <FooterLinks>
            {FirstHalfInternalLinks
              && FirstHalfInternalLinks.map(link => (
                <li key={link.node.path}>
                  <Link to={link.node.path}>{link.node.context.title}</Link>
                </li>
              ))}
          </FooterLinks>
          <FooterLogo />
          <FooterLinks style={{ textAlign: 'right' }}>
            {SecondHalfInternalLinks
              && SecondHalfInternalLinks.map(link => (
                <li key={link.node.path}>
                  <Link to={link.node.path}>{link.node.context.title}</Link>
                </li>
              ))}
          </FooterLinks>
          <FooterIconContainer>
            {SecondHalfExternalLinks
              && SecondHalfExternalLinks.map(link => (
                <a
                  key={link.url}
                  style={{ boxShadow: 'none' }}
                  target="blank"
                  href={link.url}
                >
                  <DynamicIcon icon={link.icon} disableClass className="FooterIcons" width={40} />
                </a>
              ))}
          </FooterIconContainer>
        </FooterContainer>
      )
    }}
  />
)

export default Footer

const FooterContainer = styled.div`
  padding: 15px;
  background-color: #C10909;
  display: flex;
  align-items: center;
  flex-direction: row;
  box-shadow: 0 -8px 10px rgba(0,0,0,0.35);
  justify-content: center;
`

const FooterLogo = styled(props => <Logo {...props} />)`
  padding: 10px;
  max-width: 240px;
  width: 240px;
  min-width: 150px;
`

const FooterLinks = styled.ul`
  list-style-type: none;
  margin: 0;

  & > li{
    padding: 20px;

    & > a{
      color: black;
      text-decoration: none;
      box-shadow: none;
      transition: color 0.3s;

      &:visited{
        color: black;
      }
      &:focus, &:hover{
        color: white;
      }
    }
  }
`

const FooterIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`

const DynamicIcon = styled(props => <props.icon {...props} />)`
  margin: 0 10px;
  transition: fill 0.3s;

  &:focus, &:hover{
    fill: white;
  }
  @media only screen and (max-width: 550px) {
    display: none;
  }
`;
