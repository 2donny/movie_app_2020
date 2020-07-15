import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"

function Navigation() {
    return (
        <div>
            <div className="Nav__link">
                <Link to="/" className="Link">Home</Link>
            </div>
            <div className="Nav__link">
                <Link to="/about" className="Link">About</Link>
            </div>
        </div>
    )
}

export default Navigation;