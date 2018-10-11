module.exports = {
  siteMetadata: {
    title: 'Auslan flashcards',
  },
  pathPrefix: '/auslan-flashcards',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'auslan-flashcards',
        short_name: 'flashcards',
        start_url: '/',
        background_color: '#8e3aff',
        theme_color: '#8e3aff',
        display: 'minimal-ui',
        icon: 'src/images/wave-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/data/',
      },
    },
  ],
}
