import React from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "components/Layout";

export const query = graphql`
  query BagTemplateQuery($slug: String!) {
    item: contentfulProducts(productSlug: { eq: $slug }) {
      productSlug
      productName
      shortDescription
      description {
        json
      }
      productImage {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`;

const ProductTemplate = ({ data: { item } }) => {
  const options = {};

  return (
    <Layout>
      <h2>{item.productName}</h2>
      <div>{item.shortDescription}</div>
      <Image fluid={item.productImage.fluid} />
      <main>{documentToReactComponents(item.description.json, options)}</main>
      <button
        className={`snipcart-add-item`}
        data-item-id={item.id}
        data-item-name={item.productName}
        data-item-image={item.productImage.fluid.src}
        data-item-price={item.price}
        data-item-url={`https://eloquent-bose-8068bf.netlify.com/products/${item.productSlug}`}
      >
        Add to Cart
      </button>
    </Layout>
  );
};

export default ProductTemplate;
