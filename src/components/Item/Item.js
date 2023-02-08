import React from "react";
import { Link } from "react-router-dom";
import "./item.css";


function Item ({title, price, image, genre, id}){
    return (
        <div className="cardItem">
            <h3>{title}</h3>
            <Link to="item/{itemid}"><img src={image} alt={title} /></Link>
            <p><i>{genre}</i></p>
            <p>${price}</p>
            <Link to="item/{itemid}"><button>Ver detalle</button></Link>
        </div>
    )
}

export default Item;