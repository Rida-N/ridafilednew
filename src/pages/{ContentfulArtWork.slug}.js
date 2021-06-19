import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Header from "../components/Header";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { RiCalendarLine } from "react-icons/ri";
import Markdown from "../components/Markdown";

const ArtWorkTemplate = ({ data }) => {
  console.log(data.contentfulArtWork.childContentfulArtWorkDescriptionTextNode);
  const {
    postedOn, // TODO add hover to show posted time
    image,
    title,
    childContentfulArtWorkDescriptionTextNode,
  } = data.contentfulArtWork;
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
      <div className="art-container">
        <div className="art-head-text-container">
          <div className="art-head-text">
            <h5>{title}</h5>
            <p>
              <span>
                <RiCalendarLine className="blogs-icon_calendar" />
                {postedOn}
              </span>
            </p>
          </div>
        </div>
        <GatsbyImage className="" image={getImage(image)} alt={title} />
        {childContentfulArtWorkDescriptionTextNode ? (
          <Markdown>
            {childContentfulArtWorkDescriptionTextNode.childMdx.body}
          </Markdown>
        ) : null}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query getArtWork($slug: String) {
    contentfulArtWork(slug: { eq: $slug }) {
      title
      postedOn(formatString: "YYYY.MM.DD")
      image {
        gatsbyImageData(
          formats: [AUTO, WEBP]
          layout: FULL_WIDTH
          placeholder: TRACED_SVG
        )
      }
      childContentfulArtWorkDescriptionTextNode {
        childMdx {
          body
        }
      }
    }
  }
`;

export default ArtWorkTemplate;
