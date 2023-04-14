import React from "react";
import fullHeart from "../assets/full_heart.png";
import emptyHeart from "../assets/empty_heart.png";

function Rating({ data }) {
  let stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= data.rating) {
      stars.push(
        <img className="star" src={fullHeart} key={i} alt="filled star" />
      );
    } else {
      stars.push(
        <img className="star" src={emptyHeart} key={i} alt="empty star" />
      );
    }
  }
  return (
    <div className="misc-info">
      <div className="tag-info">
        {data.tags.map((tag, key) => (
          <span key={key} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="logement-rating">
        <div>{stars}</div>
      </div>
    </div>
  );
}

export default Rating;
