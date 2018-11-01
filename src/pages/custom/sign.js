import React from 'react'
import FlashcardScene from '../../components/flashcard-scene'
import customDeckFromQuery from '../../utils/custom-deck-from-query'

const CustomSign = props => {
  return (
    <FlashcardScene
      slug="custom"
      guess="sign"
      deck={customDeckFromQuery(props.location.search)}
      search={props.location.search}
      custom
    />
  )
}

export default CustomSign
