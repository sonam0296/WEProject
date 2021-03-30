import React from 'react'

const WhatWeProvide = () => {
    return (
        <>
            <div className="web-left"></div>
            <div className="web-right">

            </div>
            <div className="whatweprovide">
                <p style={{ fontSize: "34px", fontWeight: "bold", color: "#03045E", textAlign: "right" }}>What We Provide</p>
                <p style={{ fontSize: "18px", color: "#828282", textAlign: "right" }}>Design and Technology</p>
            </div>
            <div className="emptyBox"></div>
            <div className="row">
                <div className="col-md-6">
                    <div className="web-container">
                        <p className="web-title"><strong style={{ color: "#110673" }}>Web</strong> Development</p>
                        <p className="web-content">A comprehensive solution to fit any business need that comes at a price <br /> more<br /> affordable than you can imagine!<br /></p>
                        <p className="web-content"> At WTE, we offer a comprehensive range of Open Source Soultions for your <br />website development needs</p>
                        <a className="click2" style={{float:"right",}}><span className="readMore">Read More</span><img src="assets/img/greater.png" alt="" /></a>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="provider">
                        <div className="imgprovider">
                            <img src="https://blog.counterpath.com/hubfs/assets/images/blog/posts/5-top-call-center-trends-in-2019/call-center-landscape.png" width="100%" height="100%" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="divList">
                        <ul className="nobullet">
                            <li className="listStyle">Customizations</li>
                            <li><button className="listButton">Web Development</button> </li>
                            <li className="listStyle">Web Development</li>
                            <li className="listStyle">Ecommerce Solutions</li>
                        </ul>
                    </div>
                </div>
            </div>



        </>
    )
}

export default WhatWeProvide