import React from "react"
import "./src/main.css"
import Flip from './src/Flip'


export default function App(props) {
    return (
        <div className="container">
            <div className="heading">
                <h1>Product Catalogue</h1>
            </div>
            <Flip />
            <div className="website heading">
                <a href="https://www.copperandcocoa.com.au" target="_blank" rel="noreferrer">Visit us</a>
            </div>
        </div>
    )
}