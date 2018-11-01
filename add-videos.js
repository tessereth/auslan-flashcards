#!/usr/bin/env node

const yaml = require('js-yaml')
const fs = require('fs')
const fetch = require('node-fetch')
const uniqueSlug = require('unique-slug')

const mp4regex = /http[^"]*\.mp4/g

function shorten(url) {
  url = url.replace('.mp4', '')
  if (url.endsWith('_1')) {
    url = url.replace(
      new RegExp('http://media.auslan.org.au/mp4video/\\d\\d/'),
      ''
    )
  } else {
    url = url.replace(
      new RegExp('http://media.auslan.org.au/auslan/\\d\\d/'),
      ''
    )
  }
  return url
}

const keyOrder = ['name', 'words', 'id', 'title', 'web', 'video']
function sortKeys(left, right) {
  const leftVal = keyOrder.findIndex(el => el === left)
  const rightVal = keyOrder.findIndex(el => el === right)
  return leftVal - rightVal
}

function slugify(str) {
  str = str.replace(/^\s+|\s+$/g, '') // trim
  str = str.toLowerCase()

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-') // collapse dashes

  return str
}

const decksPath = 'src/data/decks.yml'
const decks = yaml.safeLoad(fs.readFileSync(decksPath, 'utf8'))
const promises = []
//const to_query = []
decks.forEach(deck => {
  deck.words.forEach(word => {
    if (word.web && !word.id) {
      const title = decodeURI(word.web.replace(/.*\//, '').replace(/-.*/, ''))
      const id = slugify(title)
      word.id = id
      if (id !== title) {
        word.title = title
      }
    }
    if (word.web && !word.video) {
      console.log(`Downloading webpage for "${deck.name} - ${word.id}"`)
      promises.push(
        fetch(word.web)
          .then(res => res.text())
          .then(body => {
            const mp4s = body.match(mp4regex)
            return { deck, word, mp4s }
          })
          .catch(console.log)
      )
    }
  })
})

Promise.all(promises).then(results => {
  results.forEach(({ deck, word, mp4s }) => {
    if (mp4s.length === 1) {
      word.video = shorten(mp4s[0])
      console.log(`Set "${deck.name} - ${word.id}" to ${word.video}`)
    } else if (mp4s.length === 0) {
      console.log(`No video found for "${deck.name} - ${word.id}"`)
    } else {
      console.log(
        `Multiple videos found for "${deck.name} - ${
          word.id
        }", setting to first`
      )
      word.video = shorten(mp4s[0])
    }
  })
  fs.writeFileSync(decksPath, yaml.safeDump(decks, { sortKeys }))
  console.log('Results written to decks.yml')
})
