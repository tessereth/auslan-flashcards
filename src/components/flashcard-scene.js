import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

import Layout from '../components/layout'
import Flashcard from '../components/flashcard'
import TitleBar from '../components/title-bar'

class FlashcardScene extends React.PureComponent {
  state = { revealed: false }

  reveal = e => {
    if (e) e.preventDefault()
    this.setState({
      revealed: true,
    })
  }

  unreveal = e => {
    if (e) e.preventDefault()
    this.setState({
      revealed: false,
    })
  }

  previous = () => {
    const { slug, guess, idx } = this.props
    navigate(`/${slug}/${guess}/${idx}`)
  }

  next = () => {
    const { slug, guess, idx } = this.props
    navigate(`/${slug}/${guess}/${idx + 2}`)
  }

  right = e => {
    if (this.state.revealed) {
      this.next(e)
    } else {
      this.reveal(e)
    }
  }

  left = e => {
    if (this.state.revealed) {
      this.unreveal(e)
    } else {
      this.previous(e)
    }
  }

  isFirst = () => this.props.idx === 0

  isLast = () => this.props.idx === this.props.deck.words.length - 1

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDownNative)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDownNative)
  }

  onKeyDownNative = e => {
    if (e.key === 'ArrowLeft' && !(this.isFirst() && !this.state.revealed)) {
      this.left()
    } else if (
      e.key === 'ArrowRight' &&
      !(this.isLast() && this.state.revealed)
    ) {
      this.right()
    }
  }

  render() {
    const { deck, slug, guess, idx } = this.props
    const word = deck.words[idx]
    return (
      <Layout>
        <TitleBar>
          <h1 className="title">{deck.name}</h1>
        </TitleBar>
        <section className="section">
          <div className="container">
            <Flashcard
              key={word.id}
              word={word}
              wordFirst={guess === 'sign'}
              reveal={this.reveal}
              revealed={this.state.revealed}
            />
            <div className="level is-mobile">
              <div className="level-left">
                <button
                  className="button"
                  onClick={this.previous}
                  disabled={this.isFirst()}
                >
                  Previous
                </button>
              </div>
              <div className="level-right">
                {this.isLast() ? (
                  <button
                    className="button is-success"
                    onClick={() => navigate(`/${slug}`)}
                  >
                    Done!
                  </button>
                ) : (
                  <button className="button is-primary" onClick={this.next}>
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

FlashcardScene.propTypes = {
  slug: PropTypes.string.isRequired,
  guess: PropTypes.string.isRequired,
  idx: PropTypes.number.isRequired,
  deck: PropTypes.object.isRequired,
}

export default FlashcardScene
