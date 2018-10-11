import React from 'react'

const ExternalLink = props => (
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  <a target="_blank" rel="noopener noreferrer external" {...props} />
)

export default ExternalLink
