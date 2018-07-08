import React from 'react'
import './Topintro.css'
import logo from "../../images/logo.png"
import { Col, Row, Container } from "reactstrap";

const Topintro = () => {
    return (
        <Container className="topintro-container">
          <div className="topintro-area">
            <Row>
              <Col xs="10">
                <a className="aboutme-name">
                    Isaac Kim
                </a>
              </Col>
            </Row>
            <Row>
              <Col xs="10">
                <a className='aboutme-text'>
                    Graphic Designer
                </a>
              </Col>
            </Row>
            </div>
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
