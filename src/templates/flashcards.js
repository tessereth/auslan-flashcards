import React from 'react'
import { graphql } from 'gatsby'

import FlashcardScene from '../components/flashcard-scene'

const Flashcards = ({ data, pageContext }) => {
  return (
    <FlashcardScene
      slug={pageContext.slug}
      guess={pageContext.guess}
      idx={pageContext.idx}
      deck={data.decksYaml}
    />
  )
}

export default Flashcards

// TODO: find a way to only pull the relevant word rather than the whole list
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
