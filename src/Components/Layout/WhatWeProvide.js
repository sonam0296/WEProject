import React from 'react'
import TabVertical from '../Tabs/TabVertical'

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
            <TabVertical/>
            {/* <div className="row">
                
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
            </div> */}



        </>
    )
}

export default WhatWeProvide