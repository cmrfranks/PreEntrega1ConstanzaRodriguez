import React from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/CartWidget";
import Logo from "../../img/Logo.png"

function NavBar(){
    return (
    <header>
        <>
         <Link to="/">
            <div className="logo">
                <img src={Logo} alt="logo" width="100px"/>
            </div>
        </Link>
        <ul>
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/catalogo/isekai">Isekai</Link>
            </li>
            <li>
                <Link to="/catalogo/shoujo">Shoujo</Link>
            </li>
            <li>
                <Link to="/catalogo/shounen">Shounen</Link>
            </li>
            <li>
                <Link to="/catalogo/seinen">Seinen</Link>
            </li>
            <li>
                <Link to="/contacto">Contacto</Link>
            </li>
            <li>
                <Link><Cart/></Link>
            </li>
        </ul>
        </>
    </header>
    )
}

export default NavBar;