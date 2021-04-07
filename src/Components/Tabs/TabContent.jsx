import React, { useEffect, useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import $ from 'jquery'

const Demo = () => {

 
  return(
  <>
  <div className="row" style={{marginLeft:"60px"}}>
  <div className="col-md-7">
                    <div className="web-container">
                        <p className="web-title"><strong style={{ color: "#110673"}}>Web</strong> Development</p>
                        <p className="web-content">A comprehensive solution to fit any business need that comes at a price <br /> more<br /> affordable than you can imagine!<br /></p>
                        <p className="web-content"> At WTE, we offer a comprehensive range of Open Source Soultions for your <br />website development needs</p>
                        <a className="click2" style={{float:"right",}}><span className="readMore">Read More</span><img src="assets/img/greater.png" alt="" /></a>
                    </div>
                </div>
                <div className="col-md-5" >
                    <div className="provider" >
                        <div className="imgprovider">
                            <img src="https://blog.counterpath.com/hubfs/assets/images/blog/posts/5-top-call-center-trends-in-2019/call-center-landscape.png" width="100%" height="100%" alt="" />
                        </div>
                    </div>
                </div>
                </div>
  </>
  );
};
export default Demo
