import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Header from "../components/Header";

const About = () => {
  return (
    <Layout seo={{ title: "About" }}>
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
        <h5>Hi there 👋</h5>
        <p className="about-intro">
          I'm Rida Zhang, a coder and a designer based in China.
        </p>
        <p>微信公众号：理达的原野</p>
        <a className="about-contact" href="mailto:im@rida.site">
          Work Contact
        </a>
      </div>
    </Layout>
  );
};

export default About;
