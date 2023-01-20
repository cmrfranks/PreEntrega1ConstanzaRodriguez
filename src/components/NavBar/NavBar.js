import React from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/CartWidget";

function NavBar(){
    return (
    <header>
        <ul>
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/catalogo">Catálogo</Link>
            </li>
            <li>
                <Link to="/contacto">Contacto</Link>
            </li>
            <li>
                <Link><Cart/></Link>
            </li>
        </ul>
    </header>
    )
}

export default NavBar;