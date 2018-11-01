const customDeckFromQuery = search => {
  let deck
  if (typeof URLSearchParams === 'undefined') {
    deck = {
      name: 'test',
      words: [{ title: 'test', video: '1234', web: 'http://example.com' }],
    }
  } else {
    const urlParams = new URLSearchParams(search)
    deck = JSON.parse(atob(urlParams.get('deck')))
  }
  deck.words.forEach((word, index) => {
    word.id = String(index)
  })
  return deck
}

export default customDeckFromQuery
