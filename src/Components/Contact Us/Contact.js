import React from 'react';
import Footer from '../Layout/Footer';
import Header from '../Portfolio/Header';
import ContactForm from './ContactForm';
import ContactHeader from './ContactHeader';

const Contact = ()=>{
    return(
        <>
            <div className="contact1 button grow">
                <ContactHeader/>
                <div className="banner-text">
                    <h2>Reach Us </h2>
                    <p>We are always ready to assist you!!</p>
                </div>
            </div>
            
            <ContactForm/>
            <Footer/>
        </>
    )
}

export default Contact