import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import VideoCard from './video-card'

const WordCard = ({ word, revealed }) => (
  <div className={classnames('flashcard', { 'flashcard--hidden': !revealed })}>
    <div className="flashcard__content flashcard__content--word">
      <h1 className="title">{word.title || word.id}</h1>
    </div>
  </div>
)

const HiddenCard = ({ reveal }) => (
  <button className="flashcard flashcard--reveal" onClick={reveal}>
    <div className="flashcard__content flashcard__content--reveal">
      <p className="subtitle">Reveal</p>
    </div>
  </button>
)

const Flashcard = ({ word, wordFirst, revealed, reveal }) => {
  return (
    <div className="columns">
      <div className="column is-centered">
        {wordFirst ? (
          <WordCard word={word} revealed />
        ) : (
          <VideoCard word={word} revealed />
        )}
      </div>
      <div className="column is-centered">
        {wordFirst ? (
          <VideoCard word={word} revealed={revealed} />
        ) : (
          <WordCard word={word} revealed={revealed} />
        )}
        {!revealed && <HiddenCard reveal={reveal} />}
      </div>
    </div>
  )
}

Flashcard.propTypes = {
  word: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    video: PropTypes.string.isRequired,
  }).isRequired,
  wordFirst: PropTypes.bool,
  revealed: PropTypes.bool,
  reveal: PropTypes.func.isRequired,
}

export default Flashcard
