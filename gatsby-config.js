require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

let URL;
if (process.env.NODE_ENV === 'production') {
  URL = "https://eloquent-bose-8068bf.netlify.com/";
} else {
  URL = 'http://localhost:8000';
}
module.exports = {
  siteMetadata: {
    title: `Cactu Ecommerce <3`,
    description: `La pagina de Cactu <3`,
    author: `aquasar.io`,
    siteUrl: URL
  },
  plugins: [
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    }
  ]
};
