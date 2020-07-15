import React from "react";
import "./About.css";

function About(props) {
    console.log(props);
    return (
    <div className="about__container">
        <span>
            this is an about this page.
        </span>
        <span> Also this is an Movie App using react. </span>
    </div>
    )
}

export default About;