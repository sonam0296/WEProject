import React from 'react'
import PortFolioSlider from '../Layout/Portfolio/PortfolioSlider'

const Tab = ()=>{
  return(
    <>
    
   <div className="container-fluid py-5" >
  
  <div className="p-5 mb-5">
    {/* Rounded tabs */}
    
    <ul id="myTab" role="tablist" className="nav nav-tabs nav-pills flex-column flex-sm-row text-center ">
       <div className="col-md-4 col-sm-3 col-sm-2" style={{marginLeft:"0px"}}>
                        <p className="portfolio">PortFolio  </p>
                        <p className="work">Our Work</p>
                        <a className="click2" style={{float:"right", marginTop:"-100px"}}><img src="assets/img/greater.png" alt="" /><span className="readMore">Read More</span></a>
                    </div> 
      <li className="nav-item flex-sm-fill">
        <a id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="contact" aria-selected="false" className="nav-link border-0 text-uppercase font-weight-bold rounded-nav" style={{padding:"20px", marginLeft:"60px", cursor:"pointer"}}>Web Design</a>
      </li>
      <li className="nav-item flex-sm-fill">
        <a id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="contact" aria-selected="false" className="nav-link border-0 text-uppercase font-weight-bold rounded-nav" style={{padding:"20px"}}>Web Development</a>
      </li>
      <li className="nav-item flex-sm-fill">
        <a id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false" className="nav-link border-0 text-uppercase font-weight-bold rounded-nav" style={{padding:"20px"}}>Customization</a>
      </li>
    </ul>
    <div id="myTabContent" className="tab-content">
      <div id="home" role="tabpanel" aria-labelledby="home-tab" className="tab-pane fade px-4 py-5 show active">
        <PortFolioSlider/>
      </div>
      <div id="profile" role="tabpanel" aria-labelledby="profile-tab" className="tab-pane fade px-4 py-5">
      <PortFolioSlider/>
      </div>
      <div id="contact" role="tabpanel" aria-labelledby="contact-tab" className="tab-pane fade px-4 py-5">
        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
    {/* End rounded tabs */}
    </div>
    </div>

    </>
  );
}
export default Tab