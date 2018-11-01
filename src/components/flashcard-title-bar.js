import React from 'react'
import TitleBar from './title-bar'
import { Link } from 'gatsby'

const FlashcardTitleBar = ({ deck, slug, guess, custom, search }) => {
  const otherGuess = guess === 'word' ? 'sign' : 'word'

  return (
    <TitleBar>
      <div className="level">
        <div className="level-left">
          <h1 className="title">{deck.name}</h1>
        </div>
        <div className="level-right">
          <div className="buttons">
            <Link
              to={`/${slug}/${otherGuess}?${search}`}
              className="button is-primary is-outlined is-inverted"
            >
              {`Guess ${otherGuess}`}
            </Link>
            {custom ? (
              <Link
                to={`/build-custom?${search}`}
                className="button is-primary is-outlined is-inverted"
              >
                Edit
              </Link>
            ) : (
              <Link
                to={`/${slug}`}
                className="button is-primary is-outlined is-inverted"
              >
                View all
              </Link>
            )}
          </div>
        </div>
      </div>
    </TitleBar>
  )
}

export default FlashcardTitleBar
