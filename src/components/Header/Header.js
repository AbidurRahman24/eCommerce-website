import React from 'react';
import './Header.css'
import logo from '../../images/Logo.png'

const Header = () => {
    return (
        <div>
            <img src={logo} alt="logo" />
        </div>
    );
};

export default Header;