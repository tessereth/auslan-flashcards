import React from 'react'
import FlashcardScene from '../../components/flashcard-scene'

const CustomWord = props => {
  const urlParams = new URLSearchParams(props.location.search)
  const deck = JSON.parse(atob(urlParams.get('deck')))
  deck.words.forEach((word, index) => {
    word.id = String(index)
  })
  return (
    <FlashcardScene
      slug="custom"
      guess="word"
      deck={deck}
      search={props.location.search}
      custom
    />
  )
}

export default CustomWord
