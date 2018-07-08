import React, { Component } from 'react';
import './Aboutme.css';
import aboutmepic from '../../images/aboutme.png';
import { Row, Col, Container } from "reactstrap";

class Aboutme extends Component {
    render() {
        return(
            <Container className="aboutme-container" name="aboutme">
                    <Row>
                        <Col sm="6">
                            <h1 className="aboutme-name">
                                Isaac Kim
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="6">
                            <h3 className="aboutme-info">
                                Who is he?
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="6">
                            <div className='aboutme-pic'>
                                <img src={aboutmepic}></img>
                            </div>
                        </Col>
                        <Col sm="3">
                            <div className='aboutme-text'>
                                Isaac, a recent graduate from University of California, Davis, is a graphic designer who strives for excellence and growth. He currently resides in Los Angeles, California.
                                <br />
                                <br />
                                With 4 years of practicing and developing design skills, he believes he can successfully assess others in the design field and other businesses by making beneficial changes wherever and whatever he commits himself to.
                            </div>
                        </Col>
                    </Row>
            </Container>
        )
    }
}

export default Aboutme;
