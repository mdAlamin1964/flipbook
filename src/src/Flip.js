import React from "react";
import { useRef } from "react";
import HTMLFlipBook from "react-pageflip"
import { nanoid } from "nanoid";

export default function FlipDemo() {

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

    return (
        <main className="flip-container">
            <HTMLFlipBook 
                width={700} 
                height={495} 
                drawShadow={true}
                showCover={true}
                size={"stretch"}
                maxShadowOpacity={1}
                ref={book}
                >
                {pagesToDisplay}
            </HTMLFlipBook>
            <div className="flip-btn-area">
                <button
                    onClick={() => 
                        book.current.pageFlip().flipPrev()
                    }>
                    Previous
                </button>
                <button
                    onClick={() => 
                        book.current.pageFlip().flipNext()
                    }>
                    Next
                </button>
            </div>
        </main>
    );
}