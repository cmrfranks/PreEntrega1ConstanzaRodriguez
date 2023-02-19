import { createContext } from "react";
import { useState } from "react";


export const cartContext = createContext();

export function CartContextProvider(props){
    let [cart, setCart] = useState([]);
    return(
        <cartContext.Provider value={ {cart} }>
            {props.children}
        </cartContext.Provider>
    )
    
    function addItem(item) {
    let newCart = cart.map(item)
    newCart.push(item);
    setCart(newCart);
  }
}