import React, { Fragment, useEffect } from 'react'

const Raw = () => {
  return (
    <Fragment>
      <div class="container-fluid">

        <div class="tabbable-panel">
          <div class="tabbable-line">
            <ul class="nav nav-tabs ">
              <li class="active">
                <div className="card item-card card-block border-0" id="p1">
                  <a href="#tab_default_1" data-toggle="tab" class="p1"><img src="assets/img/creat.png" alt="Photo of sunset" className="imageIcons" />
                    <h5 className="item-card-title mt-3 mb-3 card-title">Imaginative Design</h5>
                    <p className="card-text">A perfect balance of innovative design and remarkable user experience</p></a>
                </div>
              </li>
              <li>
                <div className="card item-card card-block border-0"  style={{ marginTop: "350px", marginLeft: "-280px" }}>
                  <a href="#tab_default_2" data-toggle="tab">
                    <img src="assets/img/exp.png" alt="Photo of sunset" className="imageIcons" />
                    <h5 className="card-title  mt-3 mb-3">Incredible Experience</h5>
                    <p className="card-text">Give us the opportunity to unleash the WOW factor and leave you impressed!</p> </a>
                </div></li>
              <li><div className="card item-card card-block border-0"  style={{ marginTop: "170px", marginLeft: "70px" }}>
                <a href="#tab_default_3" data-toggle="tab">
                  <img src="assets/img/exp.png" alt="Photo of sunset" className="imageIcons" />
                  <h5 className="card-title  mt-3 mb-3">Intelligent Coding</h5>
                  <p className="card-text">Highly functional applications for the web with the latest technologies</p> </a>
              </div>
              </li>

            </ul>
            <div class="tab-content" style={{float:"right", marginTop:"-500px"}}>
              <div class="tab-pane active" id="tab_default_1">
                <p>
                  Imaginative Design
							</p>
                <p>
                  A perfect balance of innovative design and remarkable user experience
							</p>
              </div>
              <div class="tab-pane" id="tab_default_2">
                <p>
                  Incredible Experience
              </p>
                <p>
                  Give us the opportunity to unleash the WOW factor and leave you impressed!
							</p>

              </div>
              <div class="tab-pane" id="tab_default_3">
                <p>
                  Intelligent Coding
  							</p>
                <p>
                Highly functional applications for the web with the latest technologies
							</p>

              </div>
              
            </div>
          </div>
        </div>


      </div>

    </Fragment>
  )
}

export default Raw