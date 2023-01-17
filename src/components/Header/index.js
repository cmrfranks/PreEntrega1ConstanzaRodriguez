import "../../index.css"
import "./headerStyles.css"
import React from "react";
import Logo from "../../img/Logo.png" 
import NavBar from "../NavBar/NavBar";

const Header = () => {
    return(
        <>
        <a href="#">
            <div className="logo">
                <img src="../../img/Logo.png" alt="logo" width="150px"/>
            </div>
        </a>
        <NavBar/>
        </>
    )
}

export default Header;