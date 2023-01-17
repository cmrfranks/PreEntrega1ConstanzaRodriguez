import React from "react";

const Card = (title, image, genre, price) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{genre}</p>
      <p>{price}</p>
    </div>
  );
}
export default Card;
