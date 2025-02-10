import React from 'react'
import{ NavLink } from "react-router-dom";

function Navbar () {
    return (
        <header>
            <h1>This is the Navbar</h1>
            
        <nav>
                <NavLink to="/">Home</NavLink> |
                <NavLink to="ApartmentsCard">Details</NavLink> |
                <NavLink to="/About">About us</NavLink> |
        </nav>
        </header>
    )
}

export default Navbar;
