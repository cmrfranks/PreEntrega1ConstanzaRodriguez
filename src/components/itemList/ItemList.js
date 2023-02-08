import React from "react";
import Item from "../Item/Item";

function ItemList(props){
    return(
        <>
    <div className="contenedor">
      <h2>Welcome to Arashi Manga Store!</h2>
      {props.products.map((Card) => (
        <Item
      key = {Card.id}
      id = {Card.id}
      title = {Card.title}
      image = {Card.image}
      price = {Card.price} 
      genre = {Card.genre}
     />
    ))}
    </div>
    </> 
    )
}

export default ItemList;
