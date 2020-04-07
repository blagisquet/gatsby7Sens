import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import './style.scss';

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            gatsby
            bulma
            twitter
            medium
            github
          }
        }
      }
    `}
    render={data => (
      <footer className='footer center has-background-grey-darker'>
      </footer>
    )}
  />
)

export default Footer
