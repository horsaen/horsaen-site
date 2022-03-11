import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="navbar-container">
            <Link to="test">Horsaën</Link>
        </div>
    );
}