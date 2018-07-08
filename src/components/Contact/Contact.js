 import React, { Component } from "react";
import "./Contact.css";
import contactpic from "../../images/_MG_2737.png";
import { Col, Row, Container } from "reactstrap";


class Contact extends Component {
    render() {
        return(
            <Container className='aboutme'>
              <div className="contact-area">
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
                        Contact
                    </a>
                  </Col>
                </Row>
                </div>
                <Row>
                    <Col sm="6">
                        <div className='contact-pic'>
                            <img src={contactpic}></img>
                        </div>
                    </Col>
                    <Col sm="4">
                    <div className='aboutme-text'>
                            <h4>Let's get in touch.</h4>
                            <br />
                            <br />
                            I am always looking for inspirational projects for which I can help find solutions or create beautiful imagery. Feel free to send me a message with some information about the project and I will get back to you as soon as I can.
                            <br />
                            <br />
                            <h4>Email</h4>
                            ikims1027@gmail.com
                            <br />
                            <br />
                            <h4 className="contact-bottom">LinkedIn</h4>
                            www.linkedin.com/in/designerisaackim
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Contact;
