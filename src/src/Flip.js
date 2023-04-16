import React, { useCallback } from "react";
import { useRef } from "react";
import HTMLFlipBook from "react-pageflip"
import { nanoid } from "nanoid";

export default function FlipDemo(props) {

    //Getting images
    const flipPages = []
    for(let i = 1; i <= 12; i++) {
       flipPages.push(`(${i}).jpg`)
    }

    const pagesToDisplay =  flipPages.map(n=> (
        <div className="flip-page" key={nanoid()}>
            <img src={`https://mdalamin1964.github.io/flipbook/assets/${n}`} alt={n} />
        </div>
    ))

    // next prev function
    const book = useRef()


    // Rotate screen
    let pageWidth =  0;
    if(window.innerWidth > 1080 && window.innerHeight > 900) {
        pageWidth = 1080;
    } else if(window.innerWidth > 1080 && window.innerHeight < 900) {
        pageWidth = 950;
    } else {
       pageWidth = Math.floor(window.innerWidth * 0.9)    
    }
    
    let pageHight = Math.floor(pageWidth * 0.71);
    let mobileModeCondition = false;
    let buttonclass = ""
    let pageWidthStyle =  0;
    if(window.innerWidth < 900 && window.innerHeight < 400) {
        pageHight = window.innerHeight;
        pageWidth = Math.floor(pageHight * 1.41)
        pageWidthStyle = pageWidth
        mobileModeCondition = true;
        buttonclass = "flip-btn-mobile"
    }



    // detacting screen orientation
    var previousOrientation = window.orientation;
    var checkOrientation = function(){
        if(window.orientation !== previousOrientation){
            previousOrientation = window.orientation;
            // orientation changed, do your magic here
            window.location.reload();
            
        }
    };

    window.addEventListener("resize", checkOrientation, false);
    window.addEventListener("orientationchange", checkOrientation, false);




    // style 
    let stylesFilpContainer = {
        width: pageWidth >= 1080? 1080 : (window.innerWidth < 900 && window.innerHeight < 400) ? pageWidthStyle : pageWidth - 50
    }

    return (
        <div className="flip">
            {!mobileModeCondition 
                && 
            <div className="heading">
                <h1>Product Catalogue</h1>
                <p>height : {window.innerHeight}</p>
                <p>width : {window.innerWidth}</p>
                <p>C height : {document.body.clientHeight}</p>
                <p>C width : {document.body.clientWidth}</p>
            </div>
            }
            <main   className="flip-container"
                    style={stylesFilpContainer}
            >
                <HTMLFlipBook 
                    className="flip-images"
                    width={pageWidth} 
                    height={pageHight} 
                    drawShadow={true}
                    showCover={false}
                    size={"stretch"}
                    maxShadowOpacity={1}
                    ref={book}
                    mobileScrollSupport={true}
                    usePortrait={true}
                    clickEventForward={false}
                    swipeDistance={20}
                    minWidth={pageWidth - 100}
                    >
                    {pagesToDisplay}
                </HTMLFlipBook>
                <div className={`flip-btn-area ${buttonclass}`}>
                    <button  
                        className="prev"
                        onClick={() => 
                            book.current.pageFlip().flipPrev()
                        }>
                        Previous
                    </button>
                    <button 
                        className="next"
                        onClick={() => 
                            book.current.pageFlip().flipNext()
                        }>
                        Next
                    </button>
                </div>
            </main>
        </div>
    );
}