import React from 'react'
import About from './About'
import Banner from './Banner'
import Header from './Header'

const Home = () => {
    return (
        <>
            <div className="wrapper">
                <Header />
                <Banner/>
                <About/>
            </div>

        </>
    )
}

export default Home