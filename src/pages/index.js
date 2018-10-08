import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <section className="hero is-primary is-bold is-medium">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Auslan flashcards</h1>
          <p className="subtitle">
            Practice your signing using videos from the{' '}
            <a href="http://www.auslan.org.au/">Auslan signbank</a>
          </p>
        </div>
      </div>
    </section>
    <section className="section container">
      <h2 className="subtitle">Choose a deck</h2>
      <div className="box">
        <div className="level">
          <div className="level-left">Greetings</div>
          <div className="level-right">
            <div className="buttons">
              <Link to="/flashcard" className="button">
                Guess sign
              </Link>
              <Link to="/flashcard" className="button">
                Guess word
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="level">
          <div className="level-left">Question words</div>
          <div className="level-right">
            <div className="buttons">
              <Link to="/flashcard" className="button">
                Guess sign
              </Link>
              <Link to="/flashcard" className="button">
                Guess word
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
