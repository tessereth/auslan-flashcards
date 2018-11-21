import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Video from './video'

const WordCard = ({ word, revealed }) => (
  <div className={classnames('flashcard', { 'flashcard--hidden': !revealed })}>
    <div className="flashcard__content flashcard__content--word">
      <h1 className="title">{word.title || word.id}</h1>
    </div>
  </div>
)

const VideoCard = ({ word, revealed }) => (
  <div className={classnames('flashcard', { 'flashcard--hidden': !revealed })}>
    <div className="flashcard__content">
      <Video word={word} revealed={revealed} />
    </div>
  </div>
)

const HiddenWordCard = ({ reveal }) => (
  <button className="flashcard flashcard--reveal" onClick={reveal}>
    <div className="flashcard__content">
      <div className="af-reveal--word">
        <p className="subtitle">reveal</p>
      </div>
    </div>
  </button>
)

const HiddenVideoCard = ({ reveal }) => (
  <button className="flashcard flashcard--reveal" onClick={reveal}>
    <div className="flashcard__content">
      <div className="image is-4by3">
        <div className="af-reveal--video">
          <p className="subtitle">reveal</p>
        </div>
      </div>
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
          <>
            <VideoCard word={word} revealed={revealed} />
            {!revealed && <HiddenVideoCard reveal={reveal} />}
          </>
        ) : (
          <>
            <WordCard word={word} revealed={revealed} />
            {!revealed && <HiddenWordCard reveal={reveal} />}
          </>
        )}
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
