import React from "react"
import "../App.css"

//yimport Navbar from "./Navbar"
function Header() {
    return (
        <div>


            <div class="topnav">
                <a href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>

            </div>
            <div class="bg-img"></div>
            <h1 className="h1">Clean Blog</h1>
            <h3 className="h3"> A Blog Theme by Start Bootstrap</h3>
        </div>

    )
}

export default Header