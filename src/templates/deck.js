import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import ExternalLink from '../components/external-link'
import Video from '../components/video'

const Deck = ({ data }) => {
  return (
    <Layout>
      <section className="hero is-primary is-small">
        <div className="hero-body">
          <div className="container">
            <div className="level">
              <div className="level-left">
                <h1 className="title">{data.decksYaml.name}</h1>
              </div>
              <div className="level-right">
                <div className="buttons">
                  <Link
                    to={data.decksYaml.fields.slug + '/sign/1'}
                    className="button is-primary is-outlined is-inverted"
                  >
                    Guess sign
                  </Link>
                  <Link
                    to={data.decksYaml.fields.slug + '/word/1'}
                    className="button is-primary is-outlined is-inverted"
                  >
                    Guess word
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {data.decksYaml.words.map(word => (
              <div key={word.id} className="column is-one-third">
                <div className="card">
                  <div className="card-header">
                    <div className="card-header-title has-text-centered is-block">
                      <strong className="is-size-4">
                        {word.title || word.id}
                      </strong>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="flashcard__content flashcard__content--video">
                      <Video word={word} autoPlay={false} />
                    </div>
                  </div>
                  <div className="card-footer">
                    <ExternalLink href={word.web} className="card-footer-item">
                      Signbank
                    </ExternalLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Deck

export const query = graphql`
  query($slug: String!) {
    decksYaml(fields: { slug: { eq: $slug } }) {
      name
      fields {
        slug
      }
      words {
        id
        title
        video
        web
      }
    }
  }
`
