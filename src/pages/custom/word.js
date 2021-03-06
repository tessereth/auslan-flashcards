import React from 'react'
import FlashcardScene from '../../components/flashcard-scene'
import customDeckFromQuery from '../../utils/custom-deck-from-query'

const CustomWord = props => {
  return (
    <FlashcardScene
      slug="custom"
      guess="word"
      deck={customDeckFromQuery(props.location.search)}
      search={props.location.search}
      custom
    />
  )
}

export default CustomWord
