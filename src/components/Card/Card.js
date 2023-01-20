import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

const Card = (title, image, genre, price, id) => {

  const urlDetail = `/item/${id}`;

  return (
    <div className="cardItem">
      <h2>{title}</h2>
      <Link to="{ urlDetail }"><img src={image} alt={title} /></Link>
      <p>{genre}</p>
      <p>{price}</p>
      <Link to="{ urlDetail }"><button>Ver detalle</button></Link>
    </div>
  );
}
export default Card;
