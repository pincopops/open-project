import React from "react";
import "../components_scss/_Navbar.scss";

function Navbar() {
    return (
        <div className="navbar-container">
            <h1>Personal Site App</h1>
            <div className="navbar-container-links">
                <a href="/">Home</a>
                <a href="/">Links</a>
                <a href="/">Logout</a>
            </div>

        </div>
    )
}

export default Navbar;

