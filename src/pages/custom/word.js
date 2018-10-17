import React from 'react'
import FlashcardScene from '../../components/flashcard-scene'

const CustomWord = props => {
  let deck
  if (typeof URLSearchParams === 'undefined') {
    deck = {
      name: 'test',
      words: [{ title: 'test', video: '1234', web: 'http://foo.com' }],
    }
  } else {
    const urlParams = new URLSearchParams(props.location.search)
    deck = JSON.parse(atob(urlParams.get('deck')))
  }
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
