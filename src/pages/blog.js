import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Header from "../components/Header";

const Blog = () => {
  return (
    <Layout seo={{ title: "Blog" }}>
      {/* TODO theme related */}
      <Header>
        {/* <StaticImage
          className="header-video-img"
          alt="flowers"
          src="../assets/videos/flowers_3.jpg"
          formats={["auto", "webp", "avif"]}
          placeholder="tracedSVG"
        /> */}
      </Header>
    </Layout>
  );
};

export default Blog;
