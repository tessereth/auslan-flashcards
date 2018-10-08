import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import PrimaryNav from './primary-nav'
import 'bulma/css/bulma.css'
import '../css/application.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Auslan flashcards' },
            { name: 'keywords', content: 'auslan, flashcards' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <PrimaryNav />
        <main>{children}</main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  onKeyDown: PropTypes.func,
}

export default Layout
