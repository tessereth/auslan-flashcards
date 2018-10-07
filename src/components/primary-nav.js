import React, { PureComponent } from "react"
import { Link } from "gatsby"

class PrimaryNav extends PureComponent {
  state = { menuOpen: false }

  toggleMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  render() {
    return (
      <nav className="navbar has-shadow">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              Auslan flashcards
            </Link>
            <a
              role="button"
              className={`navbar-burger ${
                this.state.menuOpen ? "is-active" : ""
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
            className={`navbar-menu ${this.state.menuOpen ? "is-active" : ""}`}
          >
            <div className="navbar-start">
              <Link to="/decks" className="navbar-item">
                Decks
              </Link>
            </div>
            <div className="navbar-end">
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default PrimaryNav
