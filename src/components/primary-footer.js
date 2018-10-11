import React from 'react'
import ExternalLink from './external-link'

const PrimaryFooter = () => (
  <footer className="footer af-footer">
    <div className="container">
      <p>
        Videos &mdash; &copy;{' '}
        <ExternalLink href="http://www.auslan.org.au/">
          Auslan Signbank
        </ExternalLink>{' '}
        &mdash; licenced{' '}
        <ExternalLink href="http://creativecommons.org/licenses/by-nc-nd/4.0/">
          Creative Commons BY-NC-ND 4.0
        </ExternalLink>
      </p>
      <p>
        Website and source code &mdash; &copy; 2018 Teresa Bradbury &mdash;
        licenced{' '}
        <ExternalLink href="https://github.com/tessereth/auslan-flashcards/blob/master/LICENSE">
          MIT
        </ExternalLink>
      </p>
    </div>
  </footer>
)

export default PrimaryFooter
