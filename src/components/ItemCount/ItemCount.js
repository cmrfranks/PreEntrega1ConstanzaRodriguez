import React, { useState } from "react";

function ItemCount({ onAddToCart }) {
  const [count, setCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  function handleSubstract() {
    setCount((prevCount) => prevCount - 1);
  }

  function handleAdd() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleAddToCart() {
    setCartCount((prevCartCount) => prevCartCount + count);
    onAddToCart(count);
    setCount(0);
  }

  return (
    <>
      <div className="divCount">
        <button disabled={count <= 1} onClick={handleSubstract}>
          -
        </button>
        <p>{count}</p>
        <button onClick={handleAdd}>+</button>
      </div>

      <div className="btnAddCart">
        <button onClick={handleAddToCart}>Agregar al carrito</button>
      </div>

      <p>Número de elementos en el carrito: {cartCount}</p>
    </>
  );
}

export default ItemCount;