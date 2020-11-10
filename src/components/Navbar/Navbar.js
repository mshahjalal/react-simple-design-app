import React, { useState } from 'react';
import Logo from '../Logo/Logo.js';
import logo192 from '../../images/logo192.png';

const Navbar = () => {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [isProfileNavCollapsed, setIsProfileNavCollapsed] = useState(true);

    return (
        <div className='navbar navbar-expand-lg navbar-dark bg-primary text-light'>
            <Logo />
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded={!isNavCollapsed ? true: false} aria-label='Toggle navigation' onClick={() => setIsNavCollapsed(!isNavCollapsed ? true : false)}>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id='navbarNavAltMarkup'>
                <div className='navbar-nav mr-auto mt-2 mt-lg-0'>
                    <a className='nav-item nav-link active' href='/'>Dashboard</a>
                    <a className='nav-item nav-link' href='/'>Analytics</a>
                    <a className='nav-item nav-link' href='/'>Settings</a>
                </div>
                <div className='navbar-nav my-2 my-lg-0 dropdown'>
                    <span className='nav-link dropdown-toggle' id='navbarDropdownMenuLink' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded={!isProfileNavCollapsed ? true: false} onClick={() => setIsProfileNavCollapsed(!isProfileNavCollapsed ? true : false)}>
                        <img src={logo192} className='mr-sm-2' width='30px' height='30px' alt='logo 192'/>
                        <span>Merry McDonnovan</span>
                        <span className="text-muted">#7612345</span>
                    </span>
                    <div className={`${isProfileNavCollapsed ? 'dropdown-menu' : ''} `} aria-labelledby='navbarDropdownMenuLink'>
                        <a className='dropdown-item' href='/'>Action</a>
                        <a className='dropdown-item' href='/'>Another action</a>
                        <a className='dropdown-item' href='/'>Something else here</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;