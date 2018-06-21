import React from 'react'
import './Topintro.css'
import logo from "../../images/logo.png"
import { Col, Row, Container } from "reactstrap";

const Topintro = () => {
    return (
        <Container className="topintro-container">
            <Row>
                <Col sm="12">
                    <div className="about-me">
                        <h1 className="name">Isaac Kim</h1>
                        <h2 className="job">Graphic Designer</h2>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="12">
                    <div className="picture-container">
                        <img className="logo-picture" src={logo}></img>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Topintro;
