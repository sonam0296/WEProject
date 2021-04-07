import { Tab } from 'bootstrap'
import React from 'react'
import '../../App.css'
import Demo from '../Tabs/TabContent'
import SimpleTabs from '../Tabs/Tab'
import FullWidthTabs from '../Tabs/Tab'
import Image from '../Raw/Image'
import Raw from '../Raw/Raw'
import About from './About'
import Banner from './Banner'
import Clients from './Clients'
import Footer from './Footer'
import Header from './Header'
import PortFolioSlider from './Portfolio/PortfolioSlider'
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
                {/* <PortFolio/> */}
                <SimpleTabs/> 
                <WhatWeProvide/>
                <WhoWeAre/>
                <Testimonials/>
                <Teams/>
                <Clients/>
                {/* <Demo/> */}
                {/* <Tab/> */}
                {/* <PortFolio/> */}
                <Footer/>
                {/* <Image/> */}
              {/* <SimpleTabs/> */}
                {/* <Raw/> */}
            </div>

        </>
    )
}

export default Home