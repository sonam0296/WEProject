import React from 'react'

const Header = () => {
    return (
        <>
        {/* Background Image */}
            <div className="main-shape"></div>
            {/* Top NavBar */}
            <div className="top-head">
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
            <div className="main-shape1"></div>    

            {/* Logo Content Header */}
            <header>
                <a className="navbar-brand" href="#">
                    <img src="assets/img/logo.png" />
                </a>
                <nav className="navbar navbar-expand-lg custom_container">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link mr-40" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mr-40" href="#">Who we are</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mr-40" href="#">What we do</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mr-40" href="#">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link contact-btn" style={{ width: "181px", height: "47px", borderRadius: "24px " }}><a href="" style={{ textDecoration: "none" }}>Get in touch</a> </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

        </>

    )
}

export default Header