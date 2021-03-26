import React, { useState } from 'react'

const About = () => {

    const [content, setContent] = useState("")
    return (
        <>
            {/* Background Image */}
            <div className="about-us">
                <div className="left-shape"></div>
                <div className="right-shape"></div>
            </div>
            <div className="about-box">
                <div className="container mt-2">
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
                </div>
            </div>

            {/* Content */}
            <div >
                <div className="info">
                    <p style={{ fontSize: "34px" }}>Affordable and beautiful <strong style={{ color: "#03045E" }}>websites</strong> <br /> with remarkable results</p>
                    <p style={{ fontSize: "16px" }}>Webtech-Evolution is a dynamic and rapidly growing website development<br /> company that combines capability and devotion with your goals to achieve the perfect <br />end-result that makes your business profitable!</p>
                </div>
            </div>

            <div className="banner-button">
                <a className="click1"><img src="assets/img/less.png" alt="" /></a>
                <a className="click2"><img src="assets/img/greater.png" alt="" /></a>
                <h4 style={{marginLeft:"700px", marginTop:"-50px", color:"#03045E   "}}>Read More...</h4>
            </div>

            <div >
                <div className="empty">
                    
                </div>
            </div>
            
            {/* <div className="col-sm-6">
  <div className="row" style={{width: '75%', margin: '0 auto'}}>
    <div className="col-xs-6">
      <a href="#" className="p1"><span id="image1"><b>Planning</b></span></a>
    </div>
    <div className="col-xs-6">
      <a href="#" className="p2"><span id="image2"><b>Results</b></span></a>         
    </div>
  </div><br />
  <div className="row" style={{width: '75%', margin: '0 auto'}}>
    <div className="col-xs-6">
      <a href="#" className="p3"><span id="image3"><b>Improvements</b></span></a>            
    </div>
    <div className="col-xs-6">
      <a href="#" className="p4"><span id="image4"><b>Communication</b></span></a>              
    </div>
  </div>
  <div className="st">
    <div className="planning">
      <h3>Planning</h3>			
      <p className="why-text">Search Marketing Group is a leader in creating unique Seo&nbsp;strategies that would help your website rank on page 1 of 
        Google for your most competitive keywords in your niche. We pride ourself on creating custom solutions for&nbsp;businesses and 
        making it work for them. </p>	
    </div>	
    <div className="results">
      <h3>Results</h3>			
      <p className="why-text">Search Marketing Group is a leader in creating unique Seo&nbsp;strategies that would help your website rank on page 1 of 
        Google for your most competitive keywords in your niche. We pride ourself on creating custom solutions for&nbsp;businesses and 
        making it work for them. </p>	
    </div>
    <div className="improvements">
      <h3>Improvements</h3>			
      <p className="why-text">Search Marketing Group is a leader in creating unique Seo&nbsp;strategies that would help your website rank on page 1 of 
        Google for your most competitive keywords in your niche. We pride ourself on creating custom solutions for&nbsp;businesses and 
        making it work for them. </p>	
    </div>
    <div className="communication">
      <h3>Communication</h3>			
      <p className="why-text">Search Marketing Group is a leader in creating unique Seo&nbsp;strategies that would help your website rank on page 1 of 
        Google for your most competitive keywords in your niche. We pride ourself on creating custom solutions for&nbsp;businesses and 
        making it work for them. </p>	
    </div>				
  </div>
  <div className="col-sm-6 how-text">
  </div>
</div> */}

        </>
    )
}

export default About