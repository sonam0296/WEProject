import React from 'react'
import { Link } from 'react-router-dom'

const AboutNav = () => {
    return (
        <>
        {/* Background Image */}
            {/* Top NavBar */}
            <div className="top-head" style={{marginRight:"0px"}}>
                <ul>
                    <li className="mr-20"><a href="#"><i className="fas fa-envelope mr-20"></i>info@webtech-evolution.com</a></li>
                    <li className="mr-20"><a href="#"><i className="fas fa-phone-alt mr-20"></i>91-79-4800 2283 // +91-690 196 5456</a></li>
                    <li className="" style={{ paddingRight: "60px" }}>
                        <a href="#"><i className="fab fa-facebook-f mr-20"></i></a>
                        <a href="#"><i className="fab fa-twitter mr-20"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </li>
                </ul>
            </div>


            {/* Background Image */}
              

            {/* Logo Content Header */}
            <header>
                <div className="row">
                    <div className="col-md-3 col-sm-5 col-xs-4">
            {/* <div className="main-shape"></div> */}

                    <a className="navbar-brand" href="#">
                    <img src="assets/img/logo.png" />
                </a>
                    </div>

                    <div className="col-md-9 col-sm-7 col-xs-8">
                    {/* <div className="main-shape1"></div>   */}
                    <nav className="navbar navbar-expand-lg custom_container" style={{marginTop:"100px", marginLeft:"150px"}}>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto" >
                            <li className="nav-item active">
                                <Link className="nav-link mr-20" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mr-20" to="/about">Who we are</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mr-20" to="#">What we do</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mr-20" to="/portfolio">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link contact-btn" style={{ width: "181px", height: "47px", borderRadius: "24px " }}><Link to="/contact" style={{ textDecoration: "none" }}>Get in touch</Link> </button>
                            </li>
                        </ul>
                    </div>
                </nav>
                    </div>
                </div>
                
                
            </header>

        </>

    )
}

export default AboutNav