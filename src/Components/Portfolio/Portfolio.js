import React from 'react';
import Footer from '../Layout/Footer';
import Header from './Header'
import PortFolioBody from './PortFolioBody';
import Clients from "../Layout/Clients";

const PortFolio =() =>{
    return(
        <>
        <div className="portfolio__banner " >
            <Header/>
            <div className="banner-text">
                    <h2> Reinventing <strong>Hospitality</strong>  </h2>
                    <p>Technology. Experience. Engagement</p>
                </div>
        </div>
        <PortFolioBody/>
        <div className="right-triangle1"></div>

         <Clients/>
        <Footer/>
        </>
    )
}

export default PortFolio