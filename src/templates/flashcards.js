import React from 'react'
import { graphql, navigate } from 'gatsby'

import Layout from '../components/layout'
import Flashcard from '../components/flashcard'

class FlashcardScene extends React.PureComponent {
  state = { revealed: false }

  reveal = e => {
    e.preventDefault()
    this.setState({
      revealed: true,
    })
  }

  unreveal = e => {
    e.preventDefault()
    this.setState({
      revealed: false,
    })
  }

  next = e => {
    if (this.last()) {
      navigate('/')
    } else if (this.state.revealed) {
      const { slug, guess, number } = this.props.pageContext
      navigate(`/${slug}/${guess}/${number + 1}`)
    } else {
      this.reveal(e)
    }
  }

  previous = e => {
    if (this.state.revealed) {
      this.unreveal(e)
    } else {
      const { slug, guess, number } = this.props.pageContext
      navigate(`/${slug}/${guess}/${number - 1}`)
    }
  }

  first = () => this.props.pageContext.idx === 0 && !this.state.revealed

  last = () =>
    this.props.pageContext.idx === this.props.data.decksYaml.words.length - 1 &&
    this.state.revealed

  render() {
    const { data, pageContext } = this.props
    const word = data.decksYaml.words[pageContext.idx]
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <Flashcard
              key={word.id}
              word={word.title || word.id}
              mediaRef={word.video}
              wordFirst={pageContext.guess === 'sign'}
              reveal={this.reveal}
              revealed={this.state.revealed}
            />
            <div className="level">
              <div className="level-left">
                <button
                  className="button"
                  onClick={this.previous}
                  disabled={this.first()}
                >
                  Previous
                </button>
              </div>
              <div className="level-right">
                <button className="button is-primary" onClick={this.next}>
                  {this.last() ? 'Done!' : 'Next'}
                </button>
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
      words {
        id
        title
        video
      }
    }
  }
`
