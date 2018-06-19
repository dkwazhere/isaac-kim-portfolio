import React, { Component } from 'react';
import './Aboutme.css';
import aboutmepic from '../../images/aboutme.png';

class Aboutme extends Component {
    render() {
        return(
            <div className='aboutme'>
                <h1>
                    Isaac Kim
                </h1>
                <h3 className='header-three'>
                    Who is he?
                </h3>
                <div className='aboutme-pic'>
                    <img src={aboutmepic}></img>
                </div>
                <div className='aboutme-text'>
                    Isaac, a recent graduate from University of California, Davis, is a graphic designer who strives for excellence and growth. He currently resides in Los Angeles, California.
                    <br />
                    <br />
                    With 4 years of practicing and developing design skills, he believes he can successfully assess others in the design field and other businesses by making beneficial changes wherever and whatever he commits himself to.

                </div>
            </div>
        )
    }
}

export default Aboutme;
