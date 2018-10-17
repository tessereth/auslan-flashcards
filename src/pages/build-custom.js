import React from 'react'
import {
  SortableElement,
  SortableContainer,
  SortableHandle,
} from 'react-sortable-hoc'
import { List, Map } from 'immutable'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import TitleBar from '../components/title-bar'

const DragHandle = SortableHandle(() => (
  <span className="button">&#x2630;</span>
))

const WordInput = SortableElement(({ word, onWordChange, onDelete }) => (
  <li className="field is-horizontal">
    <div className="field-body">
      <div className="field has-addons">
        <div className="control">
          <DragHandle />
        </div>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Same"
            value={word.get('title')}
            onChange={e => onWordChange('title', e.target.value)}
            ref={word.get('focusRef')}
          />
        </div>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="16020_1"
            value={word.get('video')}
            onChange={e => onWordChange('video', e.target.value)}
          />
        </div>
        <div className="control is-expanded">
          <input
            className="input"
            type="text"
            placeholder="http://www.auslan.org.au/dictionary/words/same-2.html"
            value={word.get('web')}
            onChange={e => onWordChange('web', e.target.value)}
          />
        </div>
        <div className="control">
          <button
            type="button"
            className="button"
            aria-label="delete"
            onClick={onDelete}
          >
            <span className="delete" />
          </button>
        </div>
      </div>
    </div>
  </li>
))

const WordListInput = SortableContainer(({ words, onWordChange, onDelete }) => {
  return (
    <ul>
      {words.map((word, index) => (
        <WordInput
          key={`item-${index}`}
          index={index}
          word={word}
          onWordChange={(field, value) => onWordChange(index, field, value)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </ul>
  )
})

const blankWord = Map({
  title: '',
  web: '',
  video: '',
  focusRef: React.createRef(),
})

class Form extends React.PureComponent {
  state = {
    name: 'my custom deck',
    words: List([blankWord]),
  }

  componentDidMount() {
    let params = new URLSearchParams(this.props.search)
    if (params.has('deck')) {
      const deck = JSON.parse(atob(params.get('deck')))
      this.setState({
        name: deck.name || '',
        words: List(
          deck.words.map(word =>
            Map({
              title: word.title || '',
              web: 'http://www.auslan.org.au/dictionary/words/' + word.web,
              video: word.video || '',
              focusRef: React.createRef(),
            })
          )
        ),
      })
    }
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    const toMove = this.state.words.get(oldIndex)
    this.setState({
      words: this.state.words.delete(oldIndex).insert(newIndex, toMove),
    })
  }

  onWordChange = (index, field, value) => {
    this.setState({
      words: this.state.words.setIn([index, field], value),
    })
  }

  onNameChange = event => {
    this.setState({
      words: event.target.value,
    })
  }

  onAdd = () => {
    this.setState(
      {
        words: this.state.words.push(blankWord),
      },
      () => {
        this.state.words
          .get(-1)
          .get('focusRef')
          .current.focus()
      }
    )
  }

  onDelete = index => {
    this.setState({
      words: this.state.words.delete(index),
    })
  }

  serializedDeck = () => {
    // ignore anything missing a title/url
    const words = this.state.words
      .filter(
        word =>
          word.get('title').length > 0 &&
          word.get('web').length > 0 &&
          word.get('video').length > 0
      )
      .map(word =>
        Map({
          web: word
            .get('web')
            .replace('http://www.auslan.org.au/dictionary/words/', ''),
          title: word.get('title'),
          video: word.get('video'),
        })
      )
    return btoa(JSON.stringify({ name: this.state.name, words: words }))
  }

  render() {
    return (
      <form>
        <div className="field">
          <label className="label">Name</label>
          <div className="control is-expanded">
            <input
              className="input"
              type="text"
              onChange={this.onNameChange}
              value={this.state.name}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Words</label>
          <div className="control">
            <WordListInput
              words={this.state.words.toArray()}
              onSortEnd={this.onSortEnd}
              onWordChange={this.onWordChange}
              onDelete={this.onDelete}
              useDragHandle
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <div className="level is-mobile">
              <div className="level-left">
                <button type="button" className="button" onClick={this.onAdd}>
                  Add word
                </button>
              </div>
              <div className="level-right">
                <Link
                  to={`/custom/word?deck=${this.serializedDeck()}`}
                  className="button is-primary"
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

const BuildCustom = ({ location }) => {
  return (
    <Layout>
      <TitleBar>
        <h1 className="title">Build custom flashcard deck</h1>
      </TitleBar>
      <section className="section">
        <div className="container">
          <Form search={location.search} />
        </div>
      </section>
    </Layout>
  )
}

export default BuildCustom
