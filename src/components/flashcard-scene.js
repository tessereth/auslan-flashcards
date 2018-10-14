import React from 'react'
import PropTypes from 'prop-types'
import { Link, navigate } from 'gatsby'

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

  idxUrl = idx => {
    const { slug, guess } = this.props
    return `/${slug}/${guess}?${this.search(idx)}`
  }

  gotoIdx = idx => {
    this.unreveal()
    navigate(this.idxUrl(idx))
  }

  linkToIdx = ({ idx, text, ...other }) => {
    if (idx < 0 || idx >= this.props.deck.words.length) {
      return (
        <button disabled {...other}>
          {text}
        </button>
      )
    } else {
      return (
        <Link
          to={this.idxUrl(idx)}
          onClick={() => this.gotoIdx(idx)}
          {...other}
        >
          {text}
        </Link>
      )
    }
  }

  right = e => {
    if (this.isLast() && this.state.revealed) {
      // do nothing
    } else if (this.state.revealed) {
      this.gotoIdx(this.idx() + 1)
    } else {
      this.reveal(e)
    }
  }

  left = e => {
    if (this.isFirst() && !this.state.revealed) {
      // do nothing
    } else if (this.state.revealed) {
      this.unreveal(e)
    } else {
      this.gotoIdx(this.idx() - 1)
    }
  }

  isFirst = () => this.idx() === 0

  isLast = () => this.idx() === this.props.deck.words.length - 1

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDownNative)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDownNative)
  }

  onKeyDownNative = e => {
    if (e.key === 'ArrowLeft') {
      this.left()
    } else if (e.key === 'ArrowRight') {
      this.right()
    }
  }

  idx = () => {
    const urlParams = new URLSearchParams(this.props.search)
    const idx = parseInt(urlParams.get('idx') || '0')
    if (idx < 0) {
      return 0
    } else if (idx >= this.props.deck.words.length) {
      return this.props.deck.words.length - 1
    } else {
      return idx
    }
  }

  search = idx => {
    let params = new URLSearchParams(this.props.search)
    params.set('idx', idx)
    return params.toString()
  }

  render() {
    const { deck, slug, guess } = this.props
    const idx = this.idx()
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
                {this.linkToIdx({
                  idx: idx - 1,
                  text: 'Previous',
                  className: 'button',
                })}
              </div>
              <div className="level-right">
                {this.isLast() ? (
                  <Link className="button is-success" to={`/${slug}`}>
                    Done!
                  </Link>
                ) : (
                  this.linkToIdx({
                    idx: idx + 1,
                    text: 'Next',
                    className: 'button is-primary',
                  })
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
  deck: PropTypes.object.isRequired,
  search: PropTypes.string.isRequired,
}

export default FlashcardScene
