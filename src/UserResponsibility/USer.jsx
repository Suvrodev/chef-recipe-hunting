import React from 'react';
import Header from '../SharedPage/Header/Header';
import { Outlet } from 'react-router-dom';
import UserHome from './UserHome';

const USer = () => {
    return (
        <div>
            <Header></Header>
            <h1>This is User</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default USer;