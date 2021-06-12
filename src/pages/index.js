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
  const themeVersion = 2; //Math.floor(Math.random() * 4);

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
            <video
              className="header-video"
              preload="auto"
              loop
              autoPlay
              muted
              poster="true"
            >
              <source src={Flowers_1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
            <video
              className="header-video"
              preload="auto"
              loop
              autoPlay
              muted
              poster="true"
            >
              <source src={Flowers_2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
            <video
              className="header-video"
              preload="auto"
              loop
              autoPlay
              muted
              poster="true"
            >
              <source src={Flowers_3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
            <video
              className="header-video"
              preload="auto"
              loop
              autoPlay
              muted
              poster="true"
            >
              <source src={Flowers_4} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </>
        )}
      </Header>
    </Layout>
  );
};

export default IndexPage;
