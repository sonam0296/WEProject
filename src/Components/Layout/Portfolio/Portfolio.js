import React from 'react'
import PortFolioSlider from './PortfolioSlider'

const PortFolio = () => {
    return (
        <>
            <div className="container-fluid" style={{marginTop:"100px"}}>
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-sm-2" style={{marginLeft:"60px"}}>
                        <p className="portfolio">PortFolio  </p>
                        <p className="work">Our Work</p>
                        <a className="click2" style={{float:"right", marginTop:"-100px"}}><img src="assets/img/greater.png" alt="" /><span className="readMore">Read More</span></a>
                    </div>
                    <div className="col-md-2 col-sm-3 col-sm-2" style={{marginLeft:"60px"}}>
                        <p className="design">Web Design  </p>
                    </div>
                    <div className="col-md-3 col-sm-3 col-sm-2" style={{marginLeft:"60px"}}>
                        <button className="develop">Web Development</button>
                    </div>
                    <div className="col-md-2 col-sm-3 col-sm-2" style={{marginLeft:"60px"}}>
                        <p className="customization">Customizations  </p>
                    </div>
                </div>

            </div>
<div>
<PortFolioSlider/>
</div>
            
        </>
    )
}

export default PortFolio