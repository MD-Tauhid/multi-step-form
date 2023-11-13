import React from 'react';
import Footer from '../Shared/Footer';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Shared/Sidebar';
import NavBar from '../Shared/NavBar';

const Main = () => {
    return (
        <div className='w-full'>
            <NavBar></NavBar>
            <div className='grid grid-cols-4 h-[calc(100vh-2rem)]'>
                <div>
                    <Sidebar></Sidebar>
                </div>
                <div className='w-full col-span-4 md:col-span-3'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;