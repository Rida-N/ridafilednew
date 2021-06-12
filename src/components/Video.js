import React from "react";

const Video = ({ src, title, ...props }) => {
  return (
    <>
      {/* This is for embeded video
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      /> */}
      <video preload="auto" loop autoPlay muted poster="true">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default Video;
