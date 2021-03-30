import React from 'react'

function Testimonials() {
    return (
        <>
            <div className="right-triangle"></div>
            <div className="testimonial">
                <p style={{ fontSize: "34px", fontWeight: "bold", color: "#03045E", textAlign: "right" }}>Testimonial</p>
                <p style={{ fontSize: "18px", color: "#828282", textAlign: "right" }}>Client Reviews</p>
            </div>
            <div className="container-fluid px-6 px-sm-5 my-5 text-center">
                <h4 className="mb-5 font-weight-bold">What Our Client Say</h4>
                <div className="owl-carousel owl-theme">
                    <div className="item first prev">
                        <div className="card border-0 py-4 px-6" >
                            <div className="row justify-content-center">
                                <img src="https://i.imgur.com/gazoShk.jpg" className="img-fluid profile-pic mb-4 mt-3" />
                            </div>
                            <h6 className="mb-3 mt-2">Marielle Haag</h6>
                            <p className="content mb-5 mx-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.</p>
                        </div>
                    </div>
                    <div className="item show">
                        <div className="card border-0 py-4 px-6" >
                            <div className="row justify-content-center"> <img src="https://i.imgur.com/oW8Wpwi.jpg" className="img-fluid profile-pic mb-4 mt-3" /> </div>
                            <h6 className="mb-3 mt-2">Ximena Vegara</h6>
                            <p className="content mb-5 mx-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.</p>
                        </div>
                    </div>
                    <div className="item next">
                        <div className="card border-0 py-4 px-5" >
                            <div className="row justify-content-center"> <img src="https://i.imgur.com/ndQx2Rg.jpg" className="img-fluid profile-pic mb-4 mt-3" /> </div>
                            <h6 className="mb-3 mt-2">John Paul</h6>
                            <p className="content mb-5 mx-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.</p>
                        </div>
                    </div>
                    <div className="item last">
                        <div className="card border-0 py-4 px-5" >
                            <div className="row justify-content-center"> <img src="https://i.imgur.com/T5aOhwh.jpg" className="img-fluid profile-pic mb-4 mt-3" /> </div>
                            <h6 className="mb-3 mt-2">William Doe</h6>
                            <p className="content mb-5 mx-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="card col-md-6 mt-2">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval={6000}>
                    <div className="w-100 carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <div className="bg" />
                            <div className="carousel-caption">
                                <div className="row">
                                    <div className="col-sm-5">
                                        <img src="assets/img/testimonials/p1.png" alt="" width="406px" height="407px"  />
                                    </div>
                                    <div className="col-sm-7">
                                        <h3>Gives me hope</h3>
                                        <small>Well incremented. Comes with recommended workout. I'm using it to help with bladder leakage issues that I've been experiencing since a recent vasectomy.</small>
                                        <small className="smallest mute">- willi</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="bg" />
                            <div className="carousel-caption">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <img src="https://gravatar.com/avatar/b35505a8799ee6ec3cba72ac4c5185be?s=80&d=https://codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png" alt="" className="rounded-circle" />
                                    </div>
                                    <div className="col-sm-9">
                                        <h3>You will love it.</h3>
                                        <small>Great product. It came in the mail packaged very well. The package the product comes in is very nice. Product itself, has worked very well.</small>
                                        <small className="smallest mute">- Amazon Customer</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="bg" />
                            <div className="carousel-caption">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <img src="https://gravatar.com/avatar/b35505a8799ee6ec3cba72ac4c5185be?s=80&d=https://codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png" alt="" className="rounded-circle" />
                                    </div>
                                    <div className="col-sm-9">
                                        <h3>Velvet pouch!</h3>
                                        <small>Just as describe, different weights gives you several ways to exercise. I especially like the velvet pouch so I can place in my drawer.</small>
                                        <small className="smallest mute">- Amazon Customer</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div> */}

        </>
    )
}

export default Testimonials
