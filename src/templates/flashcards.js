import React from 'react'
import { graphql, navigate } from 'gatsby'

import Layout from '../components/layout'
import Flashcard from '../components/flashcard'

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
    const { slug, guess, number } = this.props.pageContext
    navigate(`/${slug}/${guess}/${number - 1}`)
  }

  next = () => {
    const { slug, guess, number } = this.props.pageContext
    navigate(`/${slug}/${guess}/${number + 1}`)
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

  isFirst = () => this.props.pageContext.idx === 0

  isLast = () =>
    this.props.pageContext.idx === this.props.data.decksYaml.words.length - 1

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
    const { data, pageContext } = this.props
    const word = data.decksYaml.words[pageContext.idx]
    return (
      <Layout>
        <section className="hero is-primary is-small">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">{data.decksYaml.name}</h1>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <Flashcard
              key={word.id}
              word={word}
              wordFirst={pageContext.guess === 'sign'}
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
                    onClick={() => navigate('/')}
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

export default FlashcardScene

// TODO: find a way to only pull the relevant word rather than the whole list
export const query = graphql`
  query($slug: String!) {
    decksYaml(fields: { slug: { eq: $slug } }) {
      name
      words {
        id
        title
        video
      }
    }
  }
`
