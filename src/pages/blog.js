import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Header from "../components/Header";
import AllBlogs from "../components/AllBlogs";
import AllTags from "../components/AllTags";

const Blog = () => {
  return (
    <Layout seo={{ title: "Blog" }}>
      {/* TODO theme related */}
      <Header>
        <StaticImage
          className="header-video-img"
          alt="flowers"
          src="../assets/images/temp.jpg"
          formats={["auto", "webp", "avif"]}
          placeholder="tracedSVG"
        />
      </Header>
      <div className="blogs-container">
        <AllTags />
        <AllBlogs />
      </div>
    </Layout>
  );
};

export default Blog;
