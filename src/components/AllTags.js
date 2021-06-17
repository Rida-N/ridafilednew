import React from "react";
import { Link } from "gatsby";
import { AiOutlineTags } from "react-icons/ai";
import { graphql, useStaticQuery } from "gatsby";
import slugify from "slugify";

//TODO 把AllTags存到redux里面
const query = graphql`
  {
    allContentfulBlog(sort: { fields: postedOn, order: DESC }) {
      nodes {
        otherInfo {
          tags
        }
      }
    }
  }
`;

const getAllTags = (nodes) => {
  const allTags = {};
  nodes.forEach((node) => {
    node.otherInfo.tags.forEach((tag) => {
      if (allTags[tag]) {
        allTags[tag]++;
      } else {
        allTags[tag] = 1;
      }
    });
  });
  return Object.entries(allTags).sort((a, b) => {
    return b[1] - a[1]; //按tag的个数排序
  });
};

const AllTags = () => {
  const allTags = getAllTags(useStaticQuery(query).allContentfulBlog.nodes);
  return (
    <div className="blog-tags">
      {/* TODO 点击TAG的时候filter 显示指定TAG下的文章，然后All Blog后面显示选中的tag名 */}
      <h4>All Blogs</h4>
      <div className="blog-tags-list">
        {allTags.map((tag, index) => {
          const [tagName, tagNumber] = tag;
          // const slug = slugify(tagName);
          return (
            <Link
              className="blog-tags-list-item"
              to={`/tags/${slugify(tagName, { lower: true })}`}
              key={index}
            >
              <AiOutlineTags className="blog-tags-list-item_icon" />
              <span>{tagName}</span>
              <span>({tagNumber})</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AllTags;
