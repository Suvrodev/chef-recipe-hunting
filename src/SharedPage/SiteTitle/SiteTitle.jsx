import React from 'react';
import './SiteTitle.css'
import { Container } from 'react-bootstrap';

const SiteTitle = () => {
    return (
        <div className='overflow-hidden'>
            <div className='siteTitle text-center  p-1 rounded-2 '>
                <h1>Suvrodeb Food House</h1>
                <p className='fw-bold ms-5 ps-5'> <small> -Take safe food by lower price </small> </p>
            </div>
        </div>
    );
};

export default SiteTitle;