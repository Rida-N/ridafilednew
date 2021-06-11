import React from "react";
import Navbar from "./Navbar.js";
import Seo from "./Seo";
import Footer from "./Footer.js";

const Layout = ({ children, seo }) => {
  return (
    <>
      <Seo {...seo} />
      <Navbar />
      <main className="page">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
