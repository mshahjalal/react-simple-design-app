import React from 'react';
import logo from '../../images/logo.svg';
import './logo.css';

const Logo = () => {
    return (
        <a href='/' className='navbar-brand' aria-label='Logo'>
            <img src={logo} className='app-logo' alt='logo' />
        </a>
    );
};

export default Logo;