import React from "react";
import Cart from "../Cart/CartWidget";

function NavBar(){
    return <navbar>
        <ul>
            <li>
                Inicio
            </li>
            <li>
                Catalogo
            </li>
            <li>
                Merch
            </li>
            <li>
                Contacto
            </li>
            <li>
                <Cart/>
            </li>
        </ul>
    </navbar>
}

export default NavBar;