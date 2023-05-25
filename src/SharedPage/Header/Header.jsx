import React from 'react';
import './Header.css'
import SiteTitle from '../SiteTitle/SiteTitle';
import NavBar from '../NavBar/NavBar';

const Header = () => {
    return (
        <div>
            <SiteTitle></SiteTitle>
            <NavBar></NavBar>
        </div>
    );
};

export default Header;