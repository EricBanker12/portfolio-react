module.exports = {
  siteMetadata: {
    title: 'Eric Banker\'s Portfolio',
    author: 'Eric Banker',
    description:
      'I am Eric Banker, a Full-Stack Web Developer, and this is my portfolio.',
    siteUrl: 'https://www.ericbanker.com',
  },
  plugins: [
    `gatsby-plugin-no-sourcemaps`,
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Eric Banker's Portfolio`,
        short_name: `E.B. Portfolio`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4682b4`,
        display: `minimal-ui`,
        icon: `src/assets/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
}
