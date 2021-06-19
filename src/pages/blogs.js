import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Header from "../components/Header";
import AllBlogs from "../components/AllBlogs";
import AllTags from "../components/AllTags";
import { graphql, useStaticQuery } from "gatsby";

//TODO 把AllTags存到redux里面
const query = graphql`
  {
    allContentfulBlog(sort: { fields: postedOn, order: DESC }) {
      nodes {
        otherInfo {
          tags
        }
      }
    }
  }
`;

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
        <AllTags
          title="All Blogs"
          allTags={useStaticQuery(query).allContentfulBlog.nodes}
        />
        <AllBlogs />
      </div>
    </Layout>
  );
};

export default Blog;
