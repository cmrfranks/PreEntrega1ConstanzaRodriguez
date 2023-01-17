import React from "react";
import Cart from "../Cart/CartWidget";

function NavBar(){
    return (
    <navbar>
        <ul>
            <li>
                <a>Inicio</a>
            </li>
            <li>
                <a>Catálogo</a>
            </li>
            <li>
                <a>Contacto</a>
            </li>
            <li>
                <a><Cart/></a>
            </li>
        </ul>
    </navbar>
    )
}

export default NavBar;