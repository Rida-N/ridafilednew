import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { RiCalendarLine } from "react-icons/ri";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

const query = graphql`
  {
    allContentfulBlog(sort: { fields: postedOn, order: DESC }) {
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
          childMdx {
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
    <>
      <div className="blogs-show-icons">
        <IoSearchOutline />
        <span>
          <BsFillGrid3X3GapFill />
          <FaThList />
        </span>
      </div>
      <div className="blogs-list">
        {nodes.map((blog, index) => {
          const {
            title,
            slug,
            postedOn,
            coverImage,
            childContentfulBlogMdContentTextNode: {
              childMdx: { timeToRead },
            },
          } = blog;

          return (
            <Link
              key={`blogs_${index}`}
              to={`/${slug}`}
              className="blogs-entry"
            >
              <GatsbyImage
                image={getImage(coverImage)}
                className="blogs-cover_img"
                alt={title}
              />
              <div className="blogs-info">
                <h5>{title}</h5>
                <p>
                  <span>
                    <RiCalendarLine className="blogs-icon_calendar" />
                    {postedOn}
                  </span>
                  <span>{timeToRead} min read</span>
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default AllBlogs;
