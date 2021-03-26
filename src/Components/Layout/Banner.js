import React from 'react'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBView } from 'mdbreact';

const Banner = () => {
    return (
        <>
            <div className="banner">
                <div className="row">
                    <div className="col-md-6">
                        <div className="heading">
                            <p>Mobile apps</p>
                        </div>
                        <div className="content">
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
                        <a className="button1"><img src="assets/img/greater.png" style={{marginTop:"-200px"}} alt=""/></a>
                    
                        <a className="button2"><img src="assets/img/less.png"  alt="" style={{marginTop:"-100px"}}/></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner

{/* // <i className="fas fa-greater-than morebtn" style={{ color: "white" }} ></i>
// <i className="fas fa-less-than lessbtn"></i> */}