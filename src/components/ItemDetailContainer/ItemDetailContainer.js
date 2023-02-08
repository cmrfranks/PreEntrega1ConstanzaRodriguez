import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleItem } from "../../services/mockAsyncService";
import ItemDetail from "../ItemDetail/ItemDetail";



function ItemDetailContainer() {
    const [product, setProduct] = useState([]);


let { itemid } = useParams();

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