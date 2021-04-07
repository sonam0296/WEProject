import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import ItemsCarousel from 'react-items-carousel';

import $ from 'jquery'

const Banner = () => {
    // const [activeItemIndex, setActiveItemIndex] = useState(0);
    // const chevronWidth = 40;
    return (
        <>
            <div className="banner">
                <div className="row">
                    <div className="col-md-6">
                        <div className="heading">
                            <p>Mobile apps</p>
                        </div>
                        <div className="content" style={{paddingTop:"-10px"}}>
                            <p><span>& software applications</span></p>
                            <p>Be it a small modification or a complex customization we do it all</p>
                        </div>
                        <div className="btn">
                            <button type="button" className="bannerButton"><p style={{ color: "white", fontSize: "20px" }}>Get Started Now</p> </button>
                        </div>
                    </div>
                    <div className="col-md-6">

                        <div className="banner-image">
                            <div className="image-box">
                            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" src="https://images.pexels.com/photos/4484145/pexels-photo-4484145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" width="100%" alt="First slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src="https://images.unsplash.com/photo-1613820703628-4c958dc37ddd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" width="100%" alt="Second slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src="https://images.pexels.com/photos/4118830/pexels-photo-4118830.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" width="100%" alt="Third slide" />
                                    </div>
                                </div>
                            </div> 
                                {/* <div style={{ padding: `0 ${chevronWidth}px` }}>
                                    <ItemsCarousel
                                        requestToChangeActive={setActiveItemIndex}
                                        activeItemIndex={activeItemIndex}
                                        numberOfCards={1}
                                        gutter={20}
                                        outsideChevron
                                        chevronWidth={chevronWidth}
                                    >
                                        <div style={{}}><img className="d-block w-100" src="https://images.pexels.com/photos/4484145/pexels-photo-4484145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" width="100%" alt="First slide" /></div>
                                        <div style={{}}> <img className="d-block w-100" src="https://images.unsplash.com/photo-1613820703628-4c958dc37ddd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" width="100%" alt="Second slide" />
                                        </div>
                                        <div style={{}}>
                                            <img className="d-block w-100" src="https://images.pexels.com/photos/4118830/pexels-photo-4118830.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" width="100%" alt="Third slide" />
                                        </div>
                                    </ItemsCarousel>
                                </div>
                                <div

                                    leftChevron={<div className="banner-button1">
                                        <button className="button1" ><img src="assets/img/greater.png" style={{ marginTop: "-200px" }} alt="" /></button></div>}
                                    rightChevron={<div className="banner-button1">

                                        <button className="button2" ><img src="assets/img/less.png" alt="" style={{ marginTop: "-100px" }} /></button>
                                    </div>}

                                >
                                    <div className="banner-button1">
                                        <button className="button1" ><img src="assets/img/greater.png" style={{ marginTop: "-200px" }} alt="" /></button></div>
                                </div>
                                <div className="banner-button1">

                                    <button className="button2" ><img src="assets/img/less.png" alt="" style={{ marginTop: "-100px" }} /></button>
                                </div> */}
                                {/* <div id="loading">
    <img src="https://d13yacurqjgara.cloudfront.net/users/12755/screenshots/1037374/hex-loader2.gif" />
    <p>Please wait while we're loading images . . .</p>    
  </div> */}
                                {/* <div id="main">
  <div id="slides">
    <div className="toggle">
      <img className="d-block w-100" src="https://images.pexels.com/photos/4484145/pexels-photo-4484145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" width="100%" />
    </div>
    <div className="toggle">
      <img className="d-block w-100" src="https://images.pexels.com/photos/4118830/pexels-photo-4118830.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" width="100%" />
    </div>
    <div className="toggle">
      <img  src="https://images.unsplash.com/photo-1613820703628-4c958dc37ddd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" width="100%" />
    </div>
    <div>
      <button id="previous">⪗ Previous</button>
      <button id="next">Next ⪘</button>
    </div>
  </div>
</div> */}

                                {/* <img src="https://images.pexels.com/photos/4484145/pexels-photo-4484145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" width="100%"/>
                                <img src="https://images.pexels.com/photos/4118830/pexels-photo-4118830.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" width="100%"/> */}
                            </div>
                            {/* <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" src="https://images.pexels.com/photos/4484145/pexels-photo-4484145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" width="100%" alt="First slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src="https://images.unsplash.com/photo-1613820703628-4c958dc37ddd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" width="100%" alt="Second slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src="https://images.pexels.com/photos/4118830/pexels-photo-4118830.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" width="100%" alt="Third slide" />
                                    </div>
                                </div>
                            </div> */}


                        </div>
                        <div className="animated-box">

                        </div>

                    </div>
                    {/* <div className="banner-button1">
                        <a className="button1"><img src="assets/img/greater.png" alt=""/></a>
                    </div>
                    <div className="banner-button2">
                        <a className="button2"><img src="assets/img/less.png"  alt=""/></a>
                    </div> */}
                    <div className="banner-button1">
                        <a className="button1" id="#carouselExampleSlidesOnly"><img src="assets/img/greater.png" style={{marginTop:"-100px"}} alt=""/></a>
                    
                        <a className="button2" id="#carouselExampleSlidesOnly"><img src="assets/img/less.png"  alt="" style={{marginTop:"00px"}}/></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner

{/* // <i className="fas fa-greater-than morebtn" style={{ color: "white" }} ></i>
// <i className="fas fa-less-than lessbtn"></i> */}