import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import ExternalLink from '../components/external-link'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <section className="hero is-primary is-bold is-medium">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-1">Auslan flashcards</h1>
            <p className="subtitle is-size-4">
              Practice your signing using videos from the{' '}
              <ExternalLink
                href="http://www.auslan.org.au/"
                className="af-hero-link"
              >
                Auslan signbank
              </ExternalLink>
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="subtitle">Choose a deck</h2>
          {data.allDecksYaml.edges.map(deck => (
            <div key={deck.node.fields.slug} className="box">
              <div className="level">
                <div className="level-left">{deck.node.name}</div>
                <div className="level-right">
                  <div className="buttons">
                    <Link
                      to={deck.node.fields.slug + '/sign'}
                      className="button"
                    >
                      Guess sign
                    </Link>
                    <Link
                      to={deck.node.fields.slug + '/word'}
                      className="button"
                    >
                      Guess word
                    </Link>
                    <Link to={deck.node.fields.slug} className="button">
                      View all
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
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
