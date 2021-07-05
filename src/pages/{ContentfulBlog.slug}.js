import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Header from "../components/Header";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { RiCalendarLine } from "react-icons/ri";
import Markdown from "../components/Markdown";

const BlogTemplate = ({ data }) => {
  const { title, coverImage, mdContent, postedOn, slug, updatedAt } =
    data.contentfulBlog;
  const {
    timeToRead,
    wordCount: { words },
    body,
  } = mdContent.childMdx;
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
      <div className="blog-container">
        <GatsbyImage
          className="blog-cover-image"
          image={getImage(coverImage)}
          alt={title}
        />

        <div className="blog-content">
          <div className="blog-head-text">
            <h5>{title}</h5>
            <p>
              <span>
                <RiCalendarLine className="blogs-icon_calendar" />
                {postedOn}
              </span>
              <span>{timeToRead * 5} min read</span>
            </p>
          </div>
          <Markdown>{body}</Markdown>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query getBlog($slug: String) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      postedOn(formatString: "YYYY.MM.DD")
      coverImage {
        gatsbyImageData(
          formats: [AUTO, WEBP]
          placeholder: TRACED_SVG
          layout: FULL_WIDTH
        )
      }
      updatedAt
      mdContent {
        childMdx {
          body
          timeToRead
          wordCount {
            words
          }
        }
      }
      slug
      id
    }
  }
`;

export default BlogTemplate;
