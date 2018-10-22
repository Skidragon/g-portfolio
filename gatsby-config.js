module.exports = {
  siteMetadata: {},

  plugins: [
    {
      resolve: "gatsby-plugin-styled-components"
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    }
  ]
};
