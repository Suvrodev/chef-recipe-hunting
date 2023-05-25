import React from 'react';
import './ErrorPage.css'
import notFound from '../../assets/notFound.jpg'
import { Link, useLocation } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <div className='notFound'>
            <h1 className='text-center fw-bold text-white bg-danger m-3 rounded-2 errorTitle'>This Link is not not available in our site</h1>
            <div className='text-center'><Link to='./'> <button className='btn btn-primary'>Go Home Page <FaHome/> </button> </Link></div>
            <div className="imageConatiner">
              <img className='dogImage img-fluid' src={notFound} alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;