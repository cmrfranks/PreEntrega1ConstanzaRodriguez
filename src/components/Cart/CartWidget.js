import React from "react";
import { useContext } from "react";
import { cartContext } from "../../Storage/CartContext";

function CartWidget() {
  const { cart, removeItem } = useContext(cartContext);
  console.log(removeItem);
  return (
    <div className="carritoTitle">
      <div><h2>Tu Carrito</h2></div>
      {cart.map((item) => (
        <div className="carrito">
          <h3>{item.name}</h3>
          <div>
          <img src={item.image} alt={item.title} width="150px" height="200px"/>
          </div>
          <h3>${item.price}</h3>
          <h4>{item.count}</h4>
          <button onClick={() => removeItem(item.id)}>X</button>
          
        </div>
      ))}
    </div>
  );
}

export default CartWidget;
