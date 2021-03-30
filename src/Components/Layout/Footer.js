import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="row" style={{ paddingTop: "69px" }}>
                    <div className="col-md-4" style={{ paddingLeft: "44px" }}>
                        <img src="assets/img/footer-logo.png" alt="" width="350px" height="60px" />
                        <p className="logo-content">Webtech-Evolution (WTE) is a rapidly growing IT company <br />focused on providing web based development of ideas and <br />software solutions ...</p>
                    </div>
                    <div className="col-md-2">
                        <div className="lineBeforeContent"> </div>
                        <p className="services" >Our Services</p>
                        <div>
                            <ul className="service-list">
                                <li className="pt-10">Web site Development</li>
                                <li className="pt-10">Website Deisgn</li>
                                <li className="pt-10">Mobile App Deveopment</li>
                                <li className="pt-10"> Social Media Marketing</li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-md-3">
                        <div className="lineBeforeContent"> </div>
                        <p className="services" >Contact Us</p>
                        <p className="address">4th Floor, Sadbhav Drive-in Exit Road, Thaltej,Ahmedabad-380 054 Gujarat, India.</p>
                        <p className="contact">+91-79-4800 2283 | +91-960 196 5456</p>
                        <p className="email">contact@webtech-evolution.com</p>
                    </div>
                    <div className="col-md-3">
                        <div className="lineBeforeContent"> </div>
                        <p className="services" >Newsletter</p>
                        <div className="newsletter">
                            <form>
                                {/* <input type="text" placeholder="Enter text here" />
                                <button type="button" className="subscribe"> Subscribe</button> */}
                                <input type="text" placeholder="Enter text here" /><input type="submit" />
                            </form>
                        </div>
                        <div className="social-media">
                            <p>Follow Us:</p>
                            <i class="fa fa-facebook" aria-hidden="true" style={{ cursor: "pointer" }}></i>
                            <i class="fa fa-twitter" aria-hidden="true" style={{ paddingLeft: "15px", cursor: "pointer" }}></i>
                            <i class="fa fa-linkedin" aria-hidden="true" style={{ paddingLeft: "15px", cursor: "pointer" }}></i>
                        </div>

                    </div>
                </div>

                <div className="copyright">
                    <p style={{paddingLeft:"30px", paddingTop:"30px"}}>© 2021. All rights reserved.<strong style={{color:"#03045E", cursor:"pointer"}}>Webtech Evolution</strong> </p>
                </div>
                <div className="termsNcondition">
                    <p >Terms and conditions | privacy policy | Cookies Policy</p>
                </div>
            </div>
        </>
    )
}

export default Footer