import React from "react";
import { useContext } from "react";
import { cartContext } from "../../storage/cartContext";

function CartContainer() {
  const { cart, addItem } = useContext(cartContext);
}
