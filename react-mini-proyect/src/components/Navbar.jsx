import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

function Navbar(props) {
    return (
        <header>
            <nav>
                <NavLink to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/Details" activeClassName="active">Details</NavLink>
                <NavLink to="/About" activeClassName="active">About us</NavLink>
            </nav>
            <h1>Apartments Trusters</h1>
            <h2>Number of Apartments: {props.apartmentArr.length}</h2>
        </header>
    );
}

export default Navbar;
