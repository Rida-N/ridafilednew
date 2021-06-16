import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Header from "../components/Header";
import { graphql, useStaticQuery, Link } from "gatsby";

const query_tagBlogs = graphql`
  {
    allContentfulBlog {
      totalCount
      nodes {
        otherInfo {
          tags
        }
        title
        slug
      }
    }
  }
`;

const getTagBlogInfo = (blogs) => {
  const allTags = {};
  blogs.forEach((blog) => {
    blog.otherInfo.tags.forEach((tag) => {
      if (allTags[tag]) {
        allTags[tag].push([blog.title, blog.slug]);
      } else {
        allTags[tag] = [[blog.title, blog.slug]];
      }
    });
  });
  return allTags;
};

const Tags = () => {
  const { totalCount, nodes } =
    useStaticQuery(query_tagBlogs).allContentfulBlog;
  const tagBlogs = getTagBlogInfo(nodes);
  return (
    <Layout seo={{ title: "Tags" }}>
      <Header>
        <StaticImage
          className="header-video-img"
          alt="flowers"
          src="../assets/images/temp.jpg"
          formats={["auto", "webp", "avif"]}
          placeholder="tracedSVG"
        />
        <div className="tags-container">
          <h4>All Tags</h4>
          <div className="tags">
            {Object.entries(tagBlogs).map((tag, tagIndex) => {
              const [tagName, blogs] = tag;
              // get images for tag (search blog with certain tag then get the first one)
              // console.log(tag);
              return (
                <div className="tags-item" key={tagIndex}>
                  <p>{tagName}</p>
                  <div className="tags-blog-list">
                    {blogs.map((blog, index) => {
                      const [blogName, slug] = blog;
                      console.log(blog);
                      return (
                        <Link
                          className="tag-blog-link"
                          to={`/${slug}`}
                          key={index}
                        >
                          {blogName}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Header>
    </Layout>
  );
};

export default Tags;
