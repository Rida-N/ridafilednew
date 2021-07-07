import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { RiCalendarLine } from "react-icons/ri";

const query = graphql`
  {
    allContentfulBlog(
      sort: { fields: postedOn, order: DESC }
      filter: { isShortNote: { eq: true } }
    ) {
      nodes {
        title
        slug
        postedOn(formatString: "YYYY.MM.DD")
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

const AllNotes = () => {
  const { nodes, totalCount } = useStaticQuery(query).allContentfulBlog;

  return (
    <>
      <h4 className="notes-container-head">All Notes</h4>
      <div className="notes-list">
        {nodes.map((note, index) => {
          const {
            title,
            slug,
            postedOn,
            childContentfulBlogMdContentTextNode: {
              childMdx: { timeToRead },
            },
          } = note;

          return (
            <Link
              key={`notes_${index}`}
              to={`/${slug}`}
              className="notes-entry"
            >
              <div className="notes-info">
                <h5>{title}</h5>
                <p>
                  <span>
                    <RiCalendarLine className="blogs-icon_calendar" />
                    {postedOn}
                  </span>
                  <span>{timeToRead * 5} min read</span>
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default AllNotes;
