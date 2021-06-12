import * as React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Flowers_1 from "../assets/videos/flowers_1.mp4";
import Flowers_2 from "../assets/videos/flowers_2.mp4";
import Flowers_3 from "../assets/videos/flowers_3.mp4";
import Flowers_4 from "../assets/videos/flowers_4.mp4";
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

const theme = ["orange", "red", "yellow", "lake"];

const IndexPage = () => {
  const themeVersion = Math.floor(Math.random() * 4);

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme[themeVersion]);
  }, []);

  const data = useStaticQuery(query).site.siteMetadata;

  return (
    <Layout seo={{ title: "Home" }}>
      <Header
        settings={{
          text1: `“ ${data.setences[themeVersion]} ”`,
          text2: data.description,
        }}
      >
        {themeVersion === 0 && (
          <>
            <StaticImage
              className="header-video-img"
              alt="flowers"
              src="../assets/videos/flowers_1.jpg"
              formats={["auto", "webp", "avif"]}
              placeholder="tracedSVG"
            />
            <Video
              className="header-video"
              {...{
                src: Flowers_1,
                title: "flowers",
              }}
            />
          </>
        )}
        {themeVersion === 1 && (
          <>
            <StaticImage
              className="header-video-img"
              alt="flowers"
              src="../assets/videos/flowers_2.jpg"
              formats={["auto", "webp", "avif"]}
              placeholder="tracedSVG"
            />
            <Video
              className="header-video"
              {...{
                src: Flowers_2,
                title: "flowers",
              }}
            />
          </>
        )}
        {themeVersion === 2 && (
          <>
            <StaticImage
              className="header-video-img"
              alt="flowers"
              src="../assets/videos/flowers_3.jpg"
              formats={["auto", "webp", "avif"]}
              placeholder="tracedSVG"
            />
            <Video
              className="header-video"
              {...{
                src: Flowers_3,
                title: "flowers",
              }}
            />
          </>
        )}
        {themeVersion === 3 && (
          <>
            <StaticImage
              className="header-video-img"
              alt="flowers"
              src="../assets/videos/flowers_4.jpg"
              formats={["auto", "webp", "avif"]}
              placeholder="tracedSVG"
            />
            <Video
              className="header-video"
              {...{
                src: Flowers_4,
                title: "flowers",
              }}
            />
          </>
        )}
      </Header>
    </Layout>
  );
};

export default IndexPage;
