import React from "react";
import { useState } from "react";

function ItemCount ({onAddToCart}) {
    const [count, setCount] = useState(0);

    function handleSubstract(){
        setCount(count -1)
    }

    function handleAdd(){
        setCount(count +1)
    }

    return(
    <>
    <div className="divCount">
        <button disabled={ count<=1 } onClick= { handleSubstract }>
            -
        </button>
        <p>{count}</p>
        <button onClick={ handleAdd }>
            +
        </button>
    </div>

    <div className="btnAddCart">
        <button onClick={onAddToCart}>
            Agregar al carrito
        </button>
    </div>
    </>
    )
}

export default ItemCount;