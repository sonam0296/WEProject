import React, { Fragment, useEffect } from 'react'

const Raw = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="card1 my-2">
                        <div className="card-body">
                          <img src="assets/img/img1.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="card1 my-2">
                        <div className="card-body">
                          <img src="assets/img/img2.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="card1 my-2">
                        <div className="card-body">
                          <img src="assets/img/img3.jpg" alt="" />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="card1 my-2">
                        <div className="card-body">
                          <img src="assets/img/img4.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="card1 my-2">
                        <div className="card-body">
                          <img src="assets/img/img1.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="card1 my-2">
                        <div className="card-body">
                          <img src="assets/img/img2.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="card1 my-2">
                        <div className="card-body">
                          <img src="assets/img/img3.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                    <div className="card1 my-2">
                        <div className="card-body">
                          <img src="assets/img/img4.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                    <div className="card1 my-2">
                        <div className="card-body">
                          <img src="assets/img/img1.jpg" alt="" />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mt-5 text-center">
              <a className="btn btn-light btn-info" href="#carouselExampleControls" role="button" data-slide="prev">
                <i className="controls class-fade">&lt;&lt;</i>
              </a>
              <a className="btn btn-light btn-info" href="#carouselExampleControls" role="button" data-slide="next">
                <i className="controls class-active">&gt;&gt;</i>
              </a>
            </div>
          </div>
        </div>
      </div>


    </Fragment>
  )
}

export default Raw