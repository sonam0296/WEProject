import React from 'react';

const WhoWeAre = () => {
    return (
        <>
            <div className="left-triangle"></div>

            <div className="whoweare">
                <p style={{ fontSize: "34px", fontWeight: "bold", color: "#03045E" }}>Who We Are</p>
                <p style={{ fontSize: "18px", color: "#828282", }}>About Our Projects</p>
            </div>
            <div className="workwedo1">
                <div className="dash"></div>
                <div className="project-banner-blue">
                        
                    </div>
                <div className="project-banner-white">
                    <img src="assets/img/projects.png" alt="" width="87px" height="87px" className="rotate90"/>
               </div>
               <div className="project-content">
                   <p style={{ color:"#0B1347", fontSize:"80px", fontWeight:"bold"}}>272</p>
                   <p style={{ color:"#0B1347", fontSize:"36px"}}>Projects</p>
               </div>
            </div>
            <div className="workwedo2" >
                
                <div className="project-banner-blue">
                        
                    </div>
                <div className="project-banner-white">
                    <img src="assets/img/clients.png" alt="" width="87px" height="87px" className="rotate90"/>
               </div>
               <div className="project-content">
                   <p style={{ color:"#0B1347", fontSize:"80px", fontWeight:"bold"}}>118</p>
                   <p style={{ color:"#0B1347", fontSize:"36px"}}>Clients</p>
               </div>
            </div>
            <div className="workwedo3" >
                
                <div className="project-banner-blue">
                        
                    </div>
                <div className="project-banner-white">
                    <img src="assets/img/briefing.png" alt="" width="87px" height="87px" className="rotate90"/>
               </div>
               <div className="project-content">
                   <p style={{ color:"#0B1347", fontSize:"80px", fontWeight:"bold"}}>500+</p>
                   <p style={{ color:"#0B1347", fontSize:"36px", textAlign:"left"}}>Projects Completed</p>
               </div>
            </div>
        </>
    )
}

export default WhoWeAre