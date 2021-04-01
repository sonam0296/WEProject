import React, { useEffect } from 'react'
import $ from 'jquery';

const About = () => {
  // useEffect(()=>{
  //   $(function() {
  //     $('#navigation a').click(function() {
  //             $('#navigation a').removeClass('selected');
  //             $(this).addClass('selected');
          
  //     });
  // });
  // })
  
  return (
    <>
      {/* Background Image */}
      <div className="about-us">
        <div className="left-shape"></div>
        <div className="right-shape"></div>
      </div>
      <div className="about-box">
        <div class="container-fluid" id="exTab1">
          {/* <div class="tabbable-panel">
            <div class="tabbable-line"> */}
            <ul  class="nav nav-pills" id="navigation">
                <li className ="active" >
                  <div className="card item-card card-block border-0 p1" id="sonam" style={{ marginLeft: "100px"}}>
                    <a href="#tab_default_1" data-toggle="tab" ><img src="assets/img/creat.png" alt="Photo of sunset" className="imageIcons" />
                      <h5 className="item-card-title mt-3 mb-3 card-title">Imaginative Design</h5>
                      <p className="card-text">A perfect balance of innovative design and remarkable user experience</p></a>
                  </div>
                </li>
                <li class="">
                  <div className="card item-card card-block border-0 p1"  style={{ marginTop: "350px", marginLeft: "-280px" }}>
                    <a href="#tab_default_2" data-toggle="tab">
                      <img src="assets/img/exp.png" alt="Photo of sunset" className="imageIcons" />
                      <h5 className="card-title  mt-3 mb-3">Incredible Experience</h5>
                      <p className="card-text">Give us the opportunity to unleash the WOW factor and leave you impressed!</p> </a>
                  </div></li>
                <li><div className="card item-card card-block border-0 p1" style={{ marginTop: "170px", marginLeft: "70px" }}>
                  <a href="#tab_default_3" data-toggle="tab">
                    <img src="assets/img/int.png" alt="Photo of sunset" className="imageIcons" />
                    <h5 className="card-title  mt-3 mb-3">Intelligent Coding</h5>
                    <p className="card-text">Highly functional applications for the web with the latest technologies</p> </a>
                </div>
                </li>

              </ul>
              {/* Content */}
              <div className="tab-content" style={{ float: "right", marginTop: "-500px" }}>
                <div className="tab-pane active" id="tab_default_1">
                <p style={{ fontSize: "34px" }}>Affordable and beautiful <strong style={{ color: "#03045E" }}>website1</strong> <br /> with remarkable results</p>
                    <p style={{ fontSize: "16px" }}>Webtech-Evolution is a dynamic and rapidly growing website development<br /> company that combines capability and devotion with your goals to achieve the perfect <br />end-result that makes your business profitable!</p>
                </div>
                <div className="tab-pane" id="tab_default_2">
                <p style={{ fontSize: "34px" }}>Affordable and beautiful <strong style={{ color: "#03045E" }}>website2</strong> <br /> with remarkable results</p>
                    <p style={{ fontSize: "16px" }}>Webtech-Evolution is a dynamic and rapidly growing website development<br /> company that combines capability and devotion with your goals to achieve the perfect <br />end-result that makes your business profitable!</p>

                </div>
                <div className="tab-pane" id="tab_default_3">
                <p style={{ fontSize: "34px" }}>Affordable and beautiful <strong style={{ color: "#03045E" }}>website3</strong> <br /> with remarkable results</p>
                    <p style={{ fontSize: "16px" }}>Webtech-Evolution is a dynamic and rapidly growing website development<br /> company that combines capability and devotion with your goals to achieve the perfect <br />end-result that makes your business profitable!</p>

                </div>

              </div>
            {/* </div>
          </div> */}


        </div>

        {/* <div classclassNameName="container mt-2">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 item" style={{ marginLeft: "-200px" }}>
                            <div className="card item-card card-block border-0" >
                            <a href="#" class="p1"><img src="assets/img/creat.png" alt="Photo of sunset" className="imageIcons" /></a>
                                <h5 className="item-card-title mt-3 mb-3 card-title">Imaginative Design</h5>
                                <p className="card-text">A perfect balance of innovative design and remarkable user experience</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 item" style={{ marginTop: "350px", marginLeft: "-280px" }}>
                            <div className="card item-card card-block border-0">
                                <img src="assets/img/exp.png" alt="Photo of sunset" className="imageIcons" />
                                <h5 className="card-title  mt-3 mb-3">Incredible Experience</h5>
                                <p className="card-text">Give us the opportunity to unleash the WOW factor and leave you impressed!</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 item" style={{ marginTop: "170px", marginLeft: "70px" }}>
                            <div className="card item-card card-block border-0">
                                <img src="assets/img/int.png" alt="Photo of sunset" className="imageIcons" />
                                <h5 className="card-title  mt-3 mb-3">Intelligent Coding</h5>
                                <p className="card-text">Highly functional applications for the web with the latest technologies</p>
                            </div>
                        </div>
                    </div>
                </div>*/}
      </div>


      {/* <div >
                <div className="info">
                    <p style={{ fontSize: "34px" }}>Affordable and beautiful <strong style={{ color: "#03045E" }}>websites</strong> <br /> with remarkable results</p>
                    <p style={{ fontSize: "16px" }}>Webtech-Evolution is a dynamic and rapidly growing website development<br /> company that combines capability and devotion with your goals to achieve the perfect <br />end-result that makes your business profitable!</p>
                </div>
            </div> */}

      <div className="banner-button">
        <a className="click1"><img src="assets/img/less.png" alt="" /></a>
        <a className="click2"><img src="assets/img/greater.png" alt="" /></a>
        <h4 style={{ marginLeft: "700px", marginTop: "-50px", color: "#03045E   " }}>Read More...</h4>
      </div>

      <div >
        <div className="empty">

        </div>
      </div>


    </>
  )
}

export default About