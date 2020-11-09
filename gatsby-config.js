module.exports = {
  siteMetadata: {
    title: 'Eric Banker\'s Portfolio',
    author: 'Eric Banker',
    description: `I am Eric Banker, a Full Stack Software Developer, with a passion for science and technology. I have strong
    technical depth in HTML, CSS, JavaScript, and Python, alongside additional, technical breadth in the
    technologies of Java, PHP, R, C, C#, and C++.`,
    siteUrl: 'https://www.ericbanker.com',
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-no-sourcemaps`,
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
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
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/projects`,
      },
    },
  ],
}
