import React from 'react';
import './Home.css'
import Banner from '../Pages/Banner/Banner';
import Chef from '../Chef/Chef/Chef';
import GoogleMap from '../Pages/GoogleMap/GoogleMap';
import SendMail from '../Pages/SendMail/SendMail';
import Branch from '../Layout/Branch/Branch/Branch';

const Home = () => {
    return (
        <div className='home'>
            {/* <h1>This is Home</h1> */}
            <Banner></Banner>
            <Chef></Chef>
            <Branch></Branch>
            {/* <GoogleMap></GoogleMap> */}
            <SendMail></SendMail>
        </div>
    );
};

export default Home;