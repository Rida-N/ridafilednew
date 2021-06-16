import React from "react";
import Navbar from "./Navbar.js";
import Seo from "./Seo";
import Footer from "./Footer.js";
import { useEffect } from "react";

const Layout = ({ children, seo }) => {
  // TODO use react redux
  useEffect(() => {
    document.documentElement.setAttribute("theme", "yellowField");
    // document.documentElement.setAttribute("blog-show", "line"); //TODO
  }, []);

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
