import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  return (
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
        {data.allDecksYaml.edges.map(deck => (
          <div key={deck.node.fields.slug} className="box">
            <div className="level">
              <div className="level-left">{deck.node.name}</div>
              <div className="level-right">
                <div className="buttons">
                  <Link to={deck.node.fields.slug + '/sign'} className="button">
                    Guess sign
                  </Link>
                  <Link to={deck.node.fields.slug + '/word'} className="button">
                    Guess word
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
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
`
