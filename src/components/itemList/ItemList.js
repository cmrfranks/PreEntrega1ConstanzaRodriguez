import React from "react";
import Card from "../Card/Card";
import Item from "../Item/Item";

function ItemList(props){
    return(
        <>
    <div>
      <h2>Welcome to Arashi Manga Store!</h2>
      {props.products.map((Card) => (
        <Item
      key = {Card.id}
      id = {Card.id}
      title = {Card.title}
      imgage = {Card.image}
      price = {Card.price} 
      genre = {Card.genre}
     />
    ))}
    </div>
    </> 
    )
}

export default ItemList;
