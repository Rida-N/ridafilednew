import React from "react";
import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Header from "../components/Header";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogTemplate = ({ data }) => {
  console.log(data.contentfulBlog);
  const { title, coverImage, mdContent, postedOn, slug, updatedAt } =
    data.contentfulBlog;
  return (
    <Layout seo={{ title: title }}>
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
      <div className="blog-container"></div>
    </Layout>
  );
};

export const query = graphql`
  query getBlog($slug: String) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      postedOn
      coverImage {
        gatsbyImageData(
          formats: [AUTO, WEBP]
          placeholder: TRACED_SVG
          layout: FULL_WIDTH
        )
      }
      updatedAt
      mdContent {
        childMarkdownRemark {
          timeToRead
          wordCount {
            words
          }
          html
        }
      }
      slug
      id
    }
  }
`;

export default BlogTemplate;
