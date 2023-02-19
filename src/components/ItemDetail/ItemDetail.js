import React from "react";
import ItemCount from "../ItemCount/ItemCount"


function ItemDetail({ title, genre, price, image, id, handleAddToCart }) {
    return(
        <div className="singleItem">
          <h2>{title}</h2>
          <img src={image} alt={title} width="350px" height="200px"/>
          <p>{genre}</p>
          <p>{price}</p>
          <ItemCount onAddToCart={handleAddToCart}/>
        </div>
    )
}

export default ItemDetail;