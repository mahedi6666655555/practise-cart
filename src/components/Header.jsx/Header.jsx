import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Contact">Contact</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;