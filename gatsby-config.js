module.exports = {
  siteMetadata: {
    title: `FW.`,
    author: `FW Studio`,
    siteUrl: `https://www.fwstud.io`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`es`, `en`, `ca`],
        defaultLanguage: `es`,
        redirect: true,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
  ],
};
