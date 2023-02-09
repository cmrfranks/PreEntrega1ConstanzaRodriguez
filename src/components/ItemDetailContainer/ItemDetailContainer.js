import { cartContext } from "../../Storage/CartContext";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleItem } from "../../services/mockAsyncService";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useContext } from "react";



function ItemDetailContainer() {
    const [product, setProduct] = useState([]);


let { itemid } = useParams();

const { cart, addItem } = useContext(cartContext);

function handleAddToCart(count){
    product.count = count;
    addItem(product);
    alert(`Agregaste ${count} unidades de ${product.title} al carrito.`);
}

useEffect(() => {
    getSingleItem(itemid)
    .then((respuesta) => {
    setProduct(respuesta);
})
    .catch( (error) => alert (`Error: ${error}`))
}, [itemid]);

return(
        <ItemDetail/>
 );
}

export default ItemDetailContainer;