const path = require(`path`)

module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: 'markdown-pages',
      },
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: path.join(__dirname, `src`, `images`),
        },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`
  ],
}
