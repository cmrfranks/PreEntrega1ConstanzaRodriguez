import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleItem } from "../../services/mockAsyncService";



function itemDetailContainer() {
    const [product, setProduct] = useState([]);


let { itemid } = useParams();

useEffect(() => {
    getSingleItem(itemid).then((respuesta) => {
    setProduct(respuesta);
});
}, [])

return(
        <div className="singleItem">
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} />
          <p>{product.genre}</p>
          <p>{product.price}</p>
        </div>
 );
}

export default itemDetailContainer;