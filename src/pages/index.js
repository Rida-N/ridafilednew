import * as React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";

import { graphql } from "gatsby";
import { useEffect } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const IndexPage = ({ data }) => {
  // temp set to 1
  const themeVersion = 1; // Math.floor(Math.random() * 4);
  const curr_sentence = Math.floor(Math.random() * 4);

  const { title, backgroundImage, backgroundVideo } =
    data.allContentfulTheme.nodes[themeVersion];

  useEffect(() => {
    document.documentElement.setAttribute("theme", title);
    // document.documentElement.setAttribute("blog-show", "line"); //TODO
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
          image={getImage(backgroundImage)}
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
