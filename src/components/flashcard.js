import React from 'react'
import PropTypes from 'prop-types'
import 'video.js'
import 'video.js/dist/video-js.css'

class Flashcard extends React.PureComponent {
  state = { revealed: false }

  reveal = () => {
    this.setState({
      revealed: true
    })
  }

  render() {
    const { word, mediaRef } = this.props
    const setup = {
      playbackRates: [0.25, 0.5, 1.0, 1.5],
      controlBar: { volumeMenuButton: false }
    }
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-centered">
              <div className="box has-text-centered" style={{ height: '100%' }}>
                <h1 className="title">{word}</h1>
              </div>
            </div>
            <div className="column is-centered">
              <div className="box">
                <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
                  <video id="flashcard-video" preload="auto" className="video-js vjs-fill" controls
                         poster={`http://media.auslan.org.au/mp4video/${mediaRef}.jpg`} data-setup={JSON.stringify(setup)}>
                    <source src={`http://media.auslan.org.au/mp4video/${mediaRef}.mp4`} type="video/mp4" />
                    <p className="vjs-no-js">
                      To view this video please enable JavaScript, and consider upgrading to a web browser that
                      <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                    </p>
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Flashcard
