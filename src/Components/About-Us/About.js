import React from 'react';
import Header from '../Portfolio/Header';
import { Video, Transformation } from 'cloudinary-react';
import AboutNav from './AboutNav';
import Footer from '../Layout/Footer'
import AboutContent from './AboutContent';

const About = () => {
    return (
        <>
            <div className="about-us1">
            <div className="h1">
                <AboutNav />
                </div>
            <div className="video-container">
                <video playsInline="playsInline" autoplay="autoplay" muted="muted" loop="loop">
                    <source src="https://res.cloudinary.com/s8779137226/video/upload/c_scale,q_auto:good,w_1903/v1617876541/Media/video_ea9jgh.mp4" type="video/mp4" />
                    
                </video>
                </div>
                

                
            </div>
            <AboutContent/>
            <Footer/>
        </>
    )
}

export default About