import React from 'react'
import FlashcardScene from '../../components/flashcard-scene'

const CustomWord = props => {
  const urlParams = new URLSearchParams(props.location.search)
  const deck = JSON.parse(atob(urlParams.get('deck')))
  const idx = urlParams.get('idx') || 0
  deck.words.forEach((word, index) => {
    word.id = String(index)
    word.video = '9930_1'
  })
  return <FlashcardScene slug="custom" guess="word" idx={idx} deck={deck} />
}

export default CustomWord
