import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Video from "./Video";

/**
 *
 * @param {*} settings
 * video : src, title; text1,text2
 * image : alt, src, placeholder, layout; text1,text2
 * @returns
 */
const Header = ({ type, settings }) => {
  return (
    <header className="header">
      {type === "video" && <Video {...settings} />}
      {type === "image" && (
        <StaticImage
          className="header-img"
          alt={settings.alt}
          src={settings.src}
          placeholder={settings.placeholder || "tracedSVG"}
          layout={settings.layout || "fullWidth"}
        ></StaticImage>
      )}
      <div className="header-content">
        <div className="header-text">
          <h1>{settings.text1}</h1>
          {settings.text2 && <p>{settings.text2}</p>}
        </div>
      </div>
    </header>
  );
};

export default Header;
