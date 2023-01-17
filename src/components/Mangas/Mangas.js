import React from "react";
import Card from "../Card/Card";

const Mangas = () => {
    return(
        <>
        <div className="productos" href="/catalogo">
         <h2>Titulos disponibles</h2>
            <section className="isekai">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </section>
            <section className="seinen">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </section>
            <section className="shoujo">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </section>
            <section className="shounen">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </section>
        </div>
        </>
    )
}

export default Mangas;