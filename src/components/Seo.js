import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

const Seo = ({ title, description }) => {
  const { site } = useStaticQuery(query);
  const metaDescription = description || site.siteMetadata.description;
  return (
    <Helmet
      htmlAttributes={{ lang: "zh-CN" }}
      title={`${title}|${site.siteMetadata.title}`}
      meta={[{ name: `description`, content: metaDescription }]}
    />
  );
};

export default Seo;
