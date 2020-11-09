import React from 'react';
import Logo from '../Logo/Logo.js';

const Navbar = () => {
    return (
        <div className='navbar navbar-dark bg-primary'>
            <Logo />
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link">Dashboard</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">Settings</a>
                </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;