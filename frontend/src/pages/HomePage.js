import React from "react";
import { HiHome } from "react-icons/hi2";


function HomePage() {

    console.log("HomePage");

    return (
        <>
            <h2><i><HiHome /></i>Welcome to my Web Dev Portfolio</h2>

            <article id="homeArticle">
                <h3>About this app</h3>

                <p>Explain all the technologies used in the site.</p>
            </article>
        </>
    );
}

export default HomePage;