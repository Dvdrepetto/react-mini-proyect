import React from 'react'
import{ NavLink } from "react-router-dom";

function Navbar (props) {
    return (
        <header>
        <nav>
                <NavLink to="/">Home</NavLink> |
                <NavLink to="ApartmentsCard">Details</NavLink> |
                <NavLink to="/About">About us</NavLink> |
        </nav>
        <h1>This is the Navbar</h1>
            <h2>Number of movies: {props.numberOfApartments}</h2>
        </header>
    )
}

export default Navbar;
