import React from 'react'

const WebContent = () => {
    return (
        <>
            <div className="web-left"></div>
            <div className="web-right"></div>
            <div className="emptyBox"></div>
            <div className="row">
                <div className="col-md-6">
                    <div className="web-container">
                        <p className="web-title"><strong style={{ color: "#110673" }}>Web</strong> Development</p>
                        <p className="web-content">A comprehensive solution to fit any business need that comes at a price <br /> more<br /> affordable than you can imagine!<br /></p>
                        <p className="web-content"> At WTE, we offer a comprehensive range of Open Source Soultions for your <br />website development needs</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="provider">
                        <div className="imgprovider">
                        <img src="https://blog.counterpath.com/hubfs/assets/images/blog/posts/5-top-call-center-trends-in-2019/call-center-landscape.png" width="100%" height="100%" alt=""/>
                        </div>
                        {/*  */}
                    </div>
                </div>
            </div>



        </>
    )
}

export default WebContent