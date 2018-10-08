import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Flashcard from '../components/flashcard'

const SecondPage = ({ data, pageContext }) => {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          {data.decksYaml.words.map(word => (
            <Flashcard
              key={word.id}
              word={word.title || word.id}
              mediaRef={word.video}
              wordFirst={pageContext.wordFirst}
            />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default SecondPage

export const query = graphql`
  query($slug: String!) {
    decksYaml(fields: { slug: { eq: $slug } }) {
      words {
        id
        title
        video
      }
    }
  }
`
