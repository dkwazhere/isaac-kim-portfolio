import React from "react";
import "./Gallery.css";
import { Col, Row, Container } from "reactstrap";

const Gallery = () => {
    return(
        <Container className="gallery-container">
            <Row>
                <h2 className="academic-projects">Academic Projects</h2>
            </Row>
            <Row>
                <div className="box">
                    <p>School Project Images Slideshow</p>
                </div>
            </Row>
            <Row>
                <h2 className="freelance-projects">Freelance Projects</h2>
            </Row>
            <Row>
                <div className="box">
                    <p>Freelance Project Images Slideshow</p>
                </div>
            </Row>
        </Container>
    )
}

export default Gallery;
