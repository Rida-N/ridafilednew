import React from "react";

/**
 *
 * @param {*} settings
 * video : src, title; text1,text2
 * image : alt, src, placeholder, layout; text1,text2
 * @returns
 */
const Header = ({ children, settings }) => {
  return (
    <header className="header">
      {children}
      {settings && (
        <div className="header-content">
          <div className="header-text">
            <h1>{settings.text1}</h1>
            {settings.text2 && <p>{settings.text2}</p>}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
