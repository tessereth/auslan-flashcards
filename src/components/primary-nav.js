import React, { PureComponent } from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'

class PrimaryNav extends PureComponent {
  state = { menuOpen: false }

  toggleMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen,
    })
  }

  // We need the hamburger menu button to be an <a> for bulma to style it properly
  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            allDecksYaml {
              edges {
                node {
                  name
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <nav className="navbar has-shadow">
            <div className="container">
              <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                  Auslan flashcards
                </Link>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  role="button"
                  className={`navbar-burger ${
                    this.state.menuOpen ? 'is-active' : ''
                  }`}
                  aria-label="menu"
                  aria-expanded={this.state.menuOpen}
                  onClick={this.toggleMenu}
                >
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                </a>
              </div>
              <div
                className={`navbar-menu ${
                  this.state.menuOpen ? 'is-active' : ''
                }`}
              >
                <div className="navbar-start">
                  <div className="navbar-item has-dropdown is-hoverable">
                    <div className="navbar-link">Decks</div>
                    <div className="navbar-dropdown">
                      {data.allDecksYaml.edges.map(deck => (
                        <Link
                          key={deck.node.fields.slug}
                          to={`/${deck.node.fields.slug}/sign`}
                          className="navbar-item"
                        >
                          {deck.node.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        )}
      />
    )
  }
}

export default PrimaryNav
