import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const AllPaintings = ({ paintings, isArtWork = false }) => {
  const newPaintings = paintings.sort((a, b) => {
    console.log(
      "Number(a.otherInfo.rank || 0) < Number(b.otherInfo.rank || 0)",
      (a.otherInfo.rank || 0) > (b.otherInfo.rank || 0)
    );
    return (b.otherInfo.rank || 0) - (a.otherInfo.rank || 0);
  });
  console.log(newPaintings);
  const rankOneImage = newPaintings[0];
  return (
    <div className="artworks-list">
      {rankOneImage ? (
        <Link //TODO scroll by hover
          key={`artwork_${0}`}
          to={`/${rankOneImage.slug}`}
          className="artworks-image-enter artworks-image-enter-rank1"
        >
          <GatsbyImage
            image={getImage(rankOneImage.image)}
            className="artworks-image-wrapper"
            alt={rankOneImage.title}
          />
        </Link>
      ) : null}
      <div
        className={isArtWork ? "artworks-arts" : "artworks-practicesAndCopies"}
      >
        {newPaintings.map((painting, index) => {
          const {
            postedOn, // TODO add hover to show posted time
            image,
            slug,
            title,
          } = painting;
          return index > 0 ? (
            <Link
              key={`artwork_${index}`}
              to={`/${slug}`}
              className="artworks-image-enter"
            >
              <GatsbyImage
                image={getImage(image)}
                className="artworks-image-wrapper"
                alt={title}
              />
            </Link>
          ) : null;
        })}
      </div>
      {/* <div>TODO ADD SEE MORE</div> */}
    </div>
  );
};

export default AllPaintings;
