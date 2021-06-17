import React from "react";
import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Header from "../components/Header";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { RiCalendarLine } from "react-icons/ri";

const BlogTemplate = ({ data }) => {
  console.log(data.contentfulBlog);
  const { title, coverImage, mdContent, postedOn, slug, updatedAt } =
    data.contentfulBlog;
  const {
    timeToRead,
    wordCount: { words },
    html,
  } = mdContent.childMarkdownRemark;
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
          <div className="blog-head-text-container">
            <div className="blog-head-text">
              <h5>{title}</h5>
              <p>
                <span>
                  <RiCalendarLine className="blogs-icon_calendar" />
                  {postedOn}
                </span>
                <span>{timeToRead} min read</span>
              </p>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
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
