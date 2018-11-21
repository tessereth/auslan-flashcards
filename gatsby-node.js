/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'DecksYaml') {
    createNodeField({
      node,
      name: 'slug',
      value: slugify(node.name),
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const createFor = (slug, guess) => {
    createPage({
      path: slug + '/' + guess,
      component: path.resolve('./src/templates/flashcards.js'),
      context: {
        slug: slug,
        guess: guess,
      },
    })
  }

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDecksYaml {
          edges {
            node {
              fields {
                slug
              }
              words {
                id
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allDecksYaml.edges.forEach(({ node }) => {
        const slug = node.fields.slug
        createPage({
          path: slug,
          component: path.resolve('./src/templates/deck.js'),
          context: { slug },
        })
        createFor(slug, 'word')
        createFor(slug, 'sign')
      })
      resolve()
    })
  })
}

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}
