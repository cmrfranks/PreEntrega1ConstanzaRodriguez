import React from "react";
import ItemCount from "../ItemCount/ItemCount"
import Item from "../Item/Item"

function itemDetail(title, genre, price, image, id) {
    return(
        <div className="singleItem">
          <h2>{Item.title}</h2>
          <img src={Item.image} alt={Item.title} width="350px" height="200px"/>
          <p>{Item.genre}</p>
          <p>{Item.price}</p>
          <ItemCount/>
        </div>
    )
}

export default itemDetail;