module.exports = {
  siteMetadata: {
    title: `Jonathan Ruiz`,
    description: `I love the outdoors, cooking, and am passionate about Front-End Web Development.`,
    author: `@jonathanruiz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jonathanruiz`,
        short_name: `jonathanruiz`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`, // Added for SASS
    `gatsby-plugin-styled-components`, // Added for Styled Components
    {
      resolve: `gatsby-plugin-typography`, // Added for Typography.js
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
