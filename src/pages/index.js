import * as React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Flowers from "../assets/videos/flowers.mp4";
import "../assets/styles/main.scss";
import { useStaticQuery, graphql } from "gatsby";
import { useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Video from "../components/Video";

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
        settings={{
          text1: `“ ${data.setences[themeVersion]} ”`,
          text2: data.description,
        }}
      >
        <Video
          {...{
            src: Flowers,
            title: "flowers",
          }}
        />
      </Header>
      {/* <Header
        settings={{
          text1: `“ ${data.setences[themeVersion]} ”`,
          text2: data.description,
        }}
      >
        <StaticImage
          className="header-img"
          alt="flowers"
          src="../assets/images/ridafield.png"
          formats={["auto", "webp", "avif"]}
          placeholder="tracedSVG"
          layout="fullWidth"
        />
      </Header> */}
    </Layout>
  );
};

export default IndexPage;
