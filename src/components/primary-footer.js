import React from 'react'

const PrimaryFooter = () => (
  <footer className="footer af-footer">
    <div className="container">
      <p>
        All videos &mdash; &copy;{' '}
        <a
          href="http://www.auslan.org.au/"
          target="_blank"
          rel="noopener noreferrer external"
        >
          Auslan Signbank
        </a>
      </p>
      <p>
        Website and source code &mdash; &copy; 2018 Teresa Bradbury &mdash;
        licenced{' '}
        <a
          href="https://github.com/tessereth/auslan-flashcards/blob/master/LICENSE"
          target="_blank"
          rel="noopener noreferrer external"
        >
          MIT
        </a>
      </p>
    </div>
  </footer>
)

export default PrimaryFooter
