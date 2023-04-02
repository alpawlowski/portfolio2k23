/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `apdev.net.pl`,
    siteUrl: `https://www.apdev.net.pl`,
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
        icon: `public/static/apdev-logo.png`,
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