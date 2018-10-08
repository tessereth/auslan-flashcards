import React from 'react'
import PropTypes from 'prop-types'
import 'video.js'
import 'video.js/dist/video-js.css'

const WordCard = ({ word }) => (
  <div className="box has-text-centered" style={{ height: '100%' }}>
    <div className="flashcard">
      <h1 className="title">{word}</h1>
    </div>
  </div>
)

const VideoCard = ({ word, mediaRef }) => {
  const setup = {
    playbackRates: [0.25, 0.5, 1.0, 1.5],
    controlBar: { volumeMenuButton: false },
  }
  const mediaPath = `http://media.auslan.org.au/mp4video/${mediaRef.slice(
    0,
    2
  )}/${mediaRef}`
  return (
    <div className="box">
      <div className="flashcard flashcard--video">
        <video
          id={`flashcard-video-${word}`}
          preload="metadata"
          className="video-js vjs-fill"
          controls
          muted
          poster={`${mediaPath}.jpg`}
          data-setup={JSON.stringify(setup)}
        >
          <source src={`${mediaPath}.mp4`} type="video/mp4" />
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

class Flashcard extends React.PureComponent {
  state = { revealed: false }

  reveal = e => {
    e.preventDefault()
    this.setState({
      revealed: true,
    })
  }

  render() {
    const { word, mediaRef, wordFirst } = this.props
    return (
      <div className="columns">
        <div className="column is-centered">
          {wordFirst ? (
            <WordCard word={word} />
          ) : (
            <VideoCard word={word} mediaRef={mediaRef} />
          )}
        </div>
        <div className="column is-centered">
          {this.state.revealed ? (
            wordFirst ? (
              <VideoCard word={word} mediaRef={mediaRef} />
            ) : (
              <WordCard word={word} />
            )
          ) : (
            <HiddenCard reveal={this.reveal} />
          )}
        </div>
      </div>
    )
  }
}

Flashcard.propTypes = {
  word: PropTypes.string.isRequired,
  mediaRef: PropTypes.string.isRequired,
  wordFirst: PropTypes.bool,
}

export default Flashcard
