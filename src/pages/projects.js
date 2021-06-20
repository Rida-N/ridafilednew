import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Header from "../components/Header";

const Projects = () => {
  return (
    <Layout seo={{ title: "Projects" }}>
      <Header>
        <StaticImage
          className="header-video-img"
          alt="flowers"
          src="../assets/images/temp.jpg"
          formats={["auto", "webp", "avif"]}
          placeholder="tracedSVG"
        />
      </Header>
      <div className="tags-container">
        <h5>In progress ...</h5>
      </div>
    </Layout>
  );
};

export default Projects;
