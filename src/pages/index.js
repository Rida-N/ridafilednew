import * as React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import "../assets/styles/main.scss";
import { graphql } from "gatsby";
import { useEffect } from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const IndexPage = ({ data }) => {
  const themeVersion = Math.floor(Math.random() * 4);
  const curr_sentence = Math.floor(Math.random() * 4);

  const { title, backgroundImage, backgroundVideo } =
    data.allContentfulTheme.nodes[themeVersion];

  useEffect(() => {
    document.documentElement.setAttribute("theme", title);
  }, []);

  return (
    <Layout seo={{ title: "Home" }}>
      <Header
        settings={{
          text1: `“ ${data.site.siteMetadata.setences[curr_sentence]} ”`,
          text2: data.site.siteMetadata.description,
        }}
      >
        <GatsbyImage
          className="header-video-img"
          image={backgroundImage.gatsbyImageData}
          alt={backgroundImage.title}
        />
        <video
          className="header-video"
          preload="auto"
          loop
          autoPlay
          muted
          poster="true"
        >
          <source src={backgroundVideo.file.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Header>
    </Layout>
  );
};

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        setences
      }
    }
    allContentfulTheme {
      nodes {
        title
        backgroundVideo {
          file {
            url
          }
        }
        backgroundImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            formats: [AUTO, WEBP]
            placeholder: TRACED_SVG
          )
          title
        }
      }
    }
  }
`;

export default IndexPage;