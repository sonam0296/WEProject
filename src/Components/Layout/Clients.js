import React from 'react'

const Clients = () => {
    return (
        <>
            <div className="container-fluid" style={{ marginTop: "50px", }}>
                <div className="row" style={{ marginLeft: "60px" }}>
                    <div className="col-8">
                        <div id="carouselExampleControl" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="card1 my-2">
                                                <div className="box1">
                                                    <img src="assets/img/clients/c1.png" alt="" className="imgportfolio" style={{ borderRadius: "70px", width: "300px", height: "300px" }} />
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="card1 my-2">
                                                <div className="box1">
                                                    <img src="assets/img/clients/c2.png" alt="" className="imgPortFolio" style={{ borderRadius: "70px", width: "300px", height: "300px" }} />
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="card1 my-2">
                                                <div className="box1">
                                                    <img src="assets/img/clients/c3.png" alt="" className="imgPortFolio" style={{ borderRadius: "70px", width: "300px", height: "300px" }} />
                                                    
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="card1 my-2">
                                                <div className="box1">
                                                    <img src="assets/img/clients/c4.png" alt="" className="imgPortFolio" style={{ borderRadius: "70px", width: "300px", height: "300px" }} />
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="card1 my-2">
                                                <div className="box1">
                                                    <img src="assets/img/clients/c5.png" alt="" className="imgPortFolio" style={{ borderRadius: "70px", width: "300px", height: "300px" }} />
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="card1 my-2">
                                                <div className="box1">
                                                    <img src="assets/img/clients/c1.png" alt="" className="imgPortFolio" style={{ borderRadius: "70px", width: "300px", height: "300px" }} />
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-4" style={{ marginLeft: "900px", marginTop: "-250px" }}>
                            <p className="portfolio">Our Clients  </p>
                            <a className="click1" href="#carouselExampleControl" role="button" data-slide="next"><img src="assets/img/less.png" alt="" /></a>
                            <a className="click2" href="#carouselExampleControl" role="button" data-slide="prev"><img src="assets/img/greater.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Clients