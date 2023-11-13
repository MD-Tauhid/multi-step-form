import React from 'react';
import Navbar from '../Shared/NavBar';
import Sidebar from '../Shared/Sidebar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Sidebar></Sidebar>
        </div>
    );
};

export default Header;