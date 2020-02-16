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
    </Layout>
  );
};

export default ProductTemplate;
