import React from "react";
import propTypes from "prop-types";

function Movie({ id, year, title, summary, poster}) {
    return <h3>{title}</h3>
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
}


export default Movie;