import React, { useState } from "react";
import { Link } from "gatsby";

import { FcMenu } from "react-icons/fc";
import { BiSearch } from "react-icons/bi";

const links = [
  { text: "Blog", url: "/blog" },
  { text: "Art Works", url: "/artworks" },
  { text: "Projects", url: "/projects" },
  { text: "Tags", url: "/tags" },
  { text: "Archive", url: "/archive" },
  { text: "About", url: "/about" },
];

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <span className="nav-logo">Rida's Field</span>
          </Link>
          <button className="nav-menuBtn" onClick={() => setShow(!show)}>
            <FcMenu />
          </button>
        </div>
        <div className={show ? "nav-links nav-links-show" : "nav-links"}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="nav-link-active"
            onClick={() => setShow(false)}
          >
            Home
          </Link>
          <span className="nav-split"></span>
          {links.map((link) => (
            <Link
              key={link.url}
              to={link.url}
              className="nav-link"
              activeClassName="nav-link-active"
              onClick={() => setShow(false)}
            >
              {link.text}
            </Link>
          ))}
          <span className="nav-split"></span>

          <button className="small plain nav-link" onClick={() => {}}>
            <BiSearch />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
