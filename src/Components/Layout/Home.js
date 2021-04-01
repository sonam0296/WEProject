import React from 'react'
import Image from '../Raw/Image'
import Raw from '../Raw/Raw'
import About from './About'
import Banner from './Banner'
import Footer from './Footer'
import Header from './Header'
import PortFolio from './Portfolio/Portfolio'
import Teams from './Teams'
import Testimonials from './Testimonials'
import WhatWeProvide from './WhatWeProvide'
import WhoWeAre from './WhoWeAre'


const Home = () => {
    return (
        <>
            <div className="wrapper">
                <Header />
                <Banner/>
                <About/>
                <PortFolio/>
                <WhatWeProvide/>
                <WhoWeAre/>
                <Testimonials/>
                <Teams/>
                <Footer/>
                <Image/>
                {/* <Raw/> */}
            </div>

        </>
    )
}

export default Home