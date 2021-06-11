import * as React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Flowers from "../assets/videos/flowers.mp4";
import "../assets/styles/main.scss";
import { useStaticQuery, graphql } from "gatsby";
import { useEffect } from "react";

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        setences
      }
    }
  }
`;

const theme = ["orange", ""];

const IndexPage = () => {
  useEffect(() => {
    document.documentElement.setAttribute("theme", "orange");
  }, []);

  const themeVersion = Math.floor(Math.random() * 4);
  const data = useStaticQuery(query).site.siteMetadata;

  return (
    <Layout seo={{ title: "Home" }}>
      <Header
        type="video"
        settings={{
          src: Flowers,
          title: "flowers",
          text1: `“ ${data.setences[themeVersion]} ”`,
          text2: data.description,
        }}
      />
    </Layout>
  );
};

export default IndexPage;
