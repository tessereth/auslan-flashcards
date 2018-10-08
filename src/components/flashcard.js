import React from 'react'
import PropTypes from 'prop-types'
import 'video.js'
import 'video.js/dist/video-js.css'

const WordCard = ({ word }) => (
  <div className="box has-text-centered" style={{ height: '100%' }}>
    <div className="flashcard">
      <h1 className="title">{word.title || word.id}</h1>
    </div>
  </div>
)

const mediaPath = mediaRef => {
  let base
  if (mediaRef.slice(-2) === '_1') {
    base = 'http://media.auslan.org.au/mp4video'
  } else {
    base = 'http://media.auslan.org.au/auslan'
  }
  return `${base}/${mediaRef.slice(0, 2)}/${mediaRef}`
}

const VideoCard = ({ word }) => {
  const setup = {
    playbackRates: [0.25, 0.5, 1.0, 1.5],
    controlBar: { volumeMenuButton: false },
  }
  return (
    <div className="box">
      <div className="flashcard flashcard--video">
        <video
          id={`flashcard-video-${word.id}`}
          preload="metadata"
          className="video-js vjs-fill"
          controls
          muted
          poster={`${mediaPath(word.video)}.jpg`}
          data-setup={JSON.stringify(setup)}
        >
          <source src={`${mediaPath(word.video)}.mp4`} type="video/mp4" />
          <p className="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading
            to a web browser that
            <a
              href="https://videojs.com/html5-video-support/"
              target="_blank"
              rel="noopener noreferrer"
            >
              supports HTML5 video
            </a>
          </p>
        </video>
      </div>
    </div>
  )
}

const HiddenCard = ({ reveal }) => (
  // We need this to be an <a> for bulma to style it properly
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <a href="#" role="button" className="box" onClick={reveal}>
    <div className="flashcard">
      <p>Reveal</p>
    </div>
  </a>
)

const Flashcard = ({ word, wordFirst, revealed, reveal }) => {
  return (
    <div className="columns">
      <div className="column is-centered">
        {wordFirst ? <WordCard word={word} /> : <VideoCard word={word} />}
      </div>
      <div className="column is-centered">
        {revealed ? (
          wordFirst ? (
            <VideoCard word={word} />
          ) : (
            <WordCard word={word} />
          )
        ) : (
          <HiddenCard reveal={reveal} />
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
