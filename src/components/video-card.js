import React from 'react'
import videojs from 'video.js'
import classnames from 'classnames'

const mediaPath = mediaRef => {
  let base
  if (mediaRef.slice(-2) === '_1') {
    base = 'http://media.auslan.org.au/mp4video'
  } else {
    base = 'http://media.auslan.org.au/auslan'
  }
  return `${base}/${mediaRef.slice(0, 2)}/${mediaRef}`
}

class VideoCard extends React.PureComponent {
  vjsDefaultOptions = {
    playbackRates: [0.25, 0.5, 1.0, 1.5],
    preload: 'auto',
    loop: true,
    controls: true,
    muted: true,
  }

  constructor(props) {
    super(props)
    this.videoRef = React.createRef()
  }

  componentDidMount() {
    this.player = videojs(this.videoRef.current, this.vjsDefaultOptions)
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.revealed !== this.props.revealed) {
      if (this.props.revealed) {
        this.player.play()
      } else {
        this.player.pause()
      }
    }
  }

  render() {
    const { word, revealed } = this.props
    return (
      <div
        className={classnames('flashcard', { 'flashcard--hidden': !revealed })}
      >
        <div className="flashcard__content flashcard__content--video">
          <video
            id={`flashcard-video-${word.id}`}
            className="video-js vjs-fill"
            poster={`${mediaPath(word.video)}.jpg`}
            ref={this.videoRef}
            autoPlay={revealed}
          >
            <source src={`${mediaPath(word.video)}.mp4`} type="video/mp4" />
            <p className="vjs-no-js">
              To view this video please enable JavaScript, and consider
              upgrading to a web browser that
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
}

export default VideoCard