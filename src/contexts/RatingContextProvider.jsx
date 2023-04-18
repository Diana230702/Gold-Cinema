import React from "react";

function Rating({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="rating">
      {[...Array(fullStars)].map((item, index) => (
        <i key={index} className="fas fa-star"></i>
      ))}
      {halfStar && <i className="fas fa-star-half"></i>}
      {[...Array(emptyStars)].map((item, i) => (
        <i key={index + fullStars + 1} className="far fa-star"></i>
      ))}
    </div>
  );
}
