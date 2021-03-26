import React from 'react'
import Raw from '../Raw/Raw'
import About from './About'
import Banner from './Banner'
import Header from './Header'
import PortFolio from './Portfolio/Portfolio'
import WebContent from './WebContent'

const Home = () => {
    return (
        <>
            <div className="wrapper">
                <Header />
                <Banner/>
                <About/>
                <PortFolio/>
                <WebContent/>
                {/* <Raw/> */}
            </div>

        </>
    )
}

export default Home