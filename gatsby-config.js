/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `apdev.website`,
    siteUrl: `https://www.apdev.website`,
    icon: 'src/assets/images/favicon.ico',
  },
  plugins: [
    "gatsby-plugin-styled-components", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Apdev`,
        short_name: 'apdev',
        start_url: `/`,
        icon: `src/assets/images/apdev-logo.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          `montserrat\:400,500,600,700`
        ],
        display: 'swap',
      },
    },
  ]
};