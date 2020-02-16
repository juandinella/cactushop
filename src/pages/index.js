import React from 'react';
import { Link, graphql } from "gatsby";
import Image from "gatsby-image";
import Layout from 'components/Layout';

export const query = graphql`
  {
    allContentfulProducts {
      nodes {
        productName
        productSlug
        shortDescription
        price
        productImage {
          fluid(quality: 100, maxWidth: 1200) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        description {
          json
        }
      }
    }
  }
`;

const index = ({ data }) => {
  const products = data.allContentfulProducts.nodes;
  return (
    <Layout>
      <div className="flex">
        {products.map(product => (
          <Link
            key={product.productSlug}
            to={`/products/${product.productSlug}`}
          >
            <h4>{product.productName}</h4>
            <div> $ {product.price} USD</div>
            <div>
              <Image fluid={product.productImage.fluid} />
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default index;
