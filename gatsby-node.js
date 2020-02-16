const path = require("path");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    {
      allContentfulProducts {
        nodes {
          productSlug
        }
      }
    }
  `);

  // create page for each product and list
  // them all in /products/:productSlug
  data.allContentfulProducts.nodes.forEach(item => {
    createPage({
      path: `products/${item.productSlug}`,
      component: path.resolve("./src/templates/Product.js"),
      context: {
        slug: item.productSlug
      }
    });
  });
};
