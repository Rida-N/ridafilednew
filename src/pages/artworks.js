import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Header from "../components/Header";
import AllTags from "../components/AllTags";
import { graphql, useStaticQuery, Link } from "gatsby";
import AllPaintings from "../components/AllPaintings";

const queryArtWorks = graphql`
  {
    artWorks: allContentfulArtWork(
      filter: { otherInfo: { type: { eq: "Art Work" } } }
      limit: 7
    ) {
      nodes {
        otherInfo {
          tags
          rank
        }
        postedOn(formatString: "YYYY.MM.DD")
        image {
          gatsbyImageData(
            formats: [AUTO, WEBP]
            layout: FULL_WIDTH
            placeholder: TRACED_SVG
          )
        }
        slug
        title
      }
    }
    practicesAndCopies: allContentfulArtWork(
      filter: { otherInfo: { type: { ne: "Art Work" } } }
      limit: 12
    ) {
      nodes {
        otherInfo {
          tags
          rank
        }
        postedOn(formatString: "YYYY.MM.DD")
        image {
          gatsbyImageData(
            formats: [AUTO, WEBP]
            layout: FULL_WIDTH
            placeholder: TRACED_SVG
          )
        }
        slug
        title
      }
    }
  }
`;

const ArtWorks = () => {
  const { artWorks, practicesAndCopies } = useStaticQuery(queryArtWorks);
  return (
    <Layout seo={{ title: "ArtWorks" }}>
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
      <div className="artworks-container">
        <AllTags title="Art Works" allTags={artWorks.nodes} />
        <AllPaintings paintings={artWorks.nodes} isArtWork={true} />
      </div>
      <div className="artworks-container">
        <AllTags
          title="Practices And Copies"
          allTags={practicesAndCopies.nodes}
        />
        <AllPaintings paintings={practicesAndCopies.nodes} />
      </div>
    </Layout>
  );
};

export default ArtWorks;
