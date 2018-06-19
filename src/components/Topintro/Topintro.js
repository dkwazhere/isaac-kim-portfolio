import React from 'react'
import './Topintro.css'
import logo from "../../images/logo.png"

const Topintro = () => {
    return (
        <div>
            <div className="about-me">
            <h1 className="name">Isacc Kim</h1>
            <h2 className="job">Graphic Designer</h2>
            </div>
            <div>
            <img className="logo-picture" src={logo}></img>
            </div>
            </div>
    )
}

export default Topintro;