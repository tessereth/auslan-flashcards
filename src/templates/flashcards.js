import React from 'react'
import { graphql } from 'gatsby'

import FlashcardScene from '../components/flashcard-scene'

const Flashcards = ({ data, pageContext, location }) => {
  return (
    <FlashcardScene
      slug={pageContext.slug}
      guess={pageContext.guess}
      deck={data.decksYaml}
      search={location.search}
    />
  )
}

export default Flashcards

export const query = graphql`
  query($slug: String!) {
    decksYaml(fields: { slug: { eq: $slug } }) {
      name
      words {
        id
        title
        video
      }
    }
  }
`
