import React from 'react';
import logo from './logo.svg';

const Logo = () => {
    return (
        <div className='app-logo-container'>
        <img src={logo} className='app-logo' alt="logo" /> Your logo
        </div>
    );
};

export default Logo;