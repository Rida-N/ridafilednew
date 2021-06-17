import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import shortcodes from "./shortcodes";

const Markdown = ({ children }) => {
  return (
    <div className="markdown">
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{children}</MDXRenderer>
      </MDXProvider>
    </div>
  );
};

export default Markdown;
