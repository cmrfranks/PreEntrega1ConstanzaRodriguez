import { createContext } from "react";
import { useState } from "react";


export const cartContext = createContext();

export function CartContextProvider(props){
    let [cart, setCart] = useState([]);
    
    function addItem(item) {
    // let newCart = cart.map(item)
    // newCart.push(item);
    // setCart(newCart);
    setCart([...cart, item]);
    }


    function removeItem(){

    }


    function clearCart(){

    }


    function getTotalItems(){
        
    }

  return(
        <cartContext.Provider value={ {cart} }>
            {props.children}
        </cartContext.Provider>
    )
}