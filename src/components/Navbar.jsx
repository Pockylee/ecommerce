import React from 'react';
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Navbar.css";
import logo_image from '../assets/icon/bp_logo.png';

export const Navbar = () => {

    return (
    <div className="navbar">
        <Link to="/">
            <img src={logo_image} alt="Logo" className="navbar-logo" />
        </Link>
        <div className="links">
            <Link to="/"> Shop </Link>
            <Link to="/contact"> Contact </Link>
            <Link to="/cart">
                <ShoppingCart size={32} />
            </Link>
        </div>
    </div>
    )
}