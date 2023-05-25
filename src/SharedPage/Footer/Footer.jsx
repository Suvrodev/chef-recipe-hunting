import React from 'react';
import './Footer.css'
import { FaFacebook, FaGooglePlus, FaInstagram, FaPinterest, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='Footer'>
            <section className='findSection'>
                <h2>Find Us</h2>
                <div className="ICON">
                    <FaFacebook/>
                    <FaTwitter/>
                    <FaPinterest/>
                    <FaWhatsapp/>
                    <FaGooglePlus/>
                    <FaInstagram/>
                </div>
            </section>

            <section className='siteMap'>
                <h2>Site Map</h2>
                <p>Recipes and Menu</p>
                <p>Expert Advice</p>
                <p>Ingredients</p>
                <p>Holiday and events</p>
                <p>Videos</p>
            </section>

            <section className='helpLink'>
                <h2>Helpful Link</h2>
                <p>Subscriptions FAQs</p>
                <p>Contact Us</p>
                <p>Masthead</p>
                <p>Accessibility Help</p>
                <p>Advertising</p>
                <p>Press Center</p>
                <p>Newsletters</p>
            </section>

            <section className='foodInnovation'>
                <h2>Food Innovation Group</h2>
                <p>The Epicurious Help</p>
                <p>Bon Apptit</p>
                <p>Experience</p>
                <p>Gourmet</p>
            </section>
            
        </div>
    );
};

export default Footer;