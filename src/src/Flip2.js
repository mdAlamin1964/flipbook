import React from "react";
import { useState, useEffect } from "react";
export default function Flip2() {
    // Hiding ads area
    let bottomHeight = 15
    let bottomPosition = 46

    // bottombar for phone horizontal view
    let winWidth =  window.innerWidth
    let winHeight = window.innerHeight
    if(winWidth < 1080 && winHeight < 400) {
        bottomPosition = 0;
        bottomHeight = 25;
    }


    const styleTop = {
        width: "100%",
        height: "50px"
    }

    const styleBottom = {
        width: "100%",
        bottom: `${bottomPosition}px`,
        height: `${bottomHeight}%`

    }


    // resizing window on reaload
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [windowHeight, setWindowHeight] = useState(window.innerHeight)
    const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)
    setTimeout(()=> {window.location.reload()}, 10);
    }
    useEffect(() => {
        window.addEventListener('resize', setWindowDimensions, false);
    return () => {
        window.removeEventListener('resize', setWindowDimensions, false)
    }
    }, [])



    return (
        <>
            <div className="outer-div">
                <div className="top-bar" style={styleTop}>
                </div>
                <div className="inner-div">     
                    <iframe className="iframe1" src="https://online.fliphtml5.com/eizcf/uavk/">
                    </iframe>
                </div>
                <div className="botom-bar" style={styleBottom}>
                </div>
            </div>
        </>
    )
}
