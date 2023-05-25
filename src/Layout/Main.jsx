import React from 'react';
import './Main.jsx'
import { Outlet } from 'react-router-dom';
import Footer from '../SharedPage/Footer/Footer';
import Header from '../SharedPage/Header/Header';

const Main = () => {
    return (
        <div className='home'>
            <Header></Header>
            {/* <h1>This is Main</h1> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;