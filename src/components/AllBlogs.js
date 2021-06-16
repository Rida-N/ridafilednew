import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { RiCalendarLine } from "react-icons/ri";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

const query = graphql`
  {
    allContentfulBlog {
      nodes {
        title
        slug
        postedOn(formatString: "YYYY.MM.DD")
        coverImage {
          gatsbyImageData(
            formats: [AUTO, WEBP]
            layout: FULL_WIDTH
            placeholder: TRACED_SVG
          )
        }
        childContentfulBlogMdContentTextNode {
          childMarkdownRemark {
            timeToRead
          }
        }
      }
      totalCount
    }
  }
`;

const AllBlogs = () => {
  const { nodes, totalCount } = useStaticQuery(query).allContentfulBlog;
  return (
    <div className="blog-container">
      <div className="blog-show-icons">
        <IoSearchOutline />
        <span>
          <BsFillGrid3X3GapFill />
          <FaThList />
        </span>
      </div>
      <div className="blog-list">
        {nodes.map((blog, index) => {
          const {
            title,
            slug,
            postedOn,
            coverImage,
            childContentfulBlogMdContentTextNode: {
              childMarkdownRemark: { timeToRead },
            },
          } = blog;

          return (
            <Link key={`blog_${index}`} to={`/${slug}`} className="blog-entry">
              <GatsbyImage
                image={getImage(coverImage)}
                className="blog-cover_img"
                alt={title}
              />
              <div className="blog-info">
                <h5>{title}</h5>
                <p>
                  <span>
                    <RiCalendarLine className="blog-icon_calendar" />
                    {postedOn}
                  </span>
                  <span>{timeToRead} min read</span>
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AllBlogs;
