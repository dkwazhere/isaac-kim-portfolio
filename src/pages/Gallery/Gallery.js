import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import eazye from "../../images/School Projects/eazye.jpg";
import tupac from "../../images/School Projects/tupac.jpg";
import VL from "../../images/School Projects/visuallanguage.jpg";
import marlboro from "../../images/School Projects/marlboror.jpg";
import redcrenshaw from "../../images/School Projects/redcrenshaw.jpg";
import crenshaw from "../../images/School Projects/final crenshaw.png";
import jepbyjep from "../../images/Freelance Projects/JEPbyJEP logo.png";
import church from "../../images/Freelance Projects/church logo.png";
import DJ from "../../images/Freelance Projects/dj hvff logo.png";
import via from "../../images/Freelance Projects/viapuerta.jpg";
import frontBC from "../../images/Freelance Projects/BC front 2.png";
import backBC from "../../images/Freelance Projects/BC back2.png";
import veins from "../../images/Freelance Projects/veins logo name.png";
import veinsheart from "../../images/Freelance Projects/VEINS heart logo.png";
import veinsshirt from "../../images/Freelance Projects/veins t-shirt design.png";

import "./Gallery.css";
import { Container, Row, Col } from "reactstrap";


const Gallerypage = () => {
  return (
    <Container>
      <Navbar />
      <Row>
        <Col xs="12">
          <h1>ISAAC KIM</h1>
        </Col>
      </Row>
      <h3>Gallery</h3>
      <Row>
        <h3 className="title">Academic Projects</h3>
      </Row>
      <Row>
        <Col xs="5">
          <img id="eazye" className="gallery-images" src={eazye} />
        </Col>
        <Col xs="7">
          <p className="description"> The Legacy of Eazy-E Advertisement</p>
        </Col>
      </Row>

      <Row>
        <Col xs="5">
          <img id="tupac" className="gallery-images" src={tupac} />
        </Col>
        <Col xs="7">
          <p className="description"> 2Pac To Live & Die in LA Album Designt</p>
        </Col>
      </Row>

      <Row>
        <Col xs="5">
          <img id="VL" className="gallery-images" src={VL} />
        </Col>
        <Col xs="7">
          <p className="description"> Visual Langauge Typography</p>
        </Col>
      </Row>

      <Row>
        <Col xs="5">
          <img id="marlboro" className="gallery-images" src={marlboro} />
        </Col>
        <Col xs="7">
          <p className="description"> Nipsey Hussle Crenshaw Cigarette Box</p>
        </Col>
      </Row>

      <Row>
        <Col xs="5">
          <img id="red-crenshaw" className="gallery-images" src={redcrenshaw} />
        </Col>
        <Col xs="7">
          <p className="description"> Nipsey Hussle Crenshaw Mixtape Poster</p>
        </Col>
      </Row>

      <Row>
        <Col xs="5">
          <img id="crenshaw" className="gallery-images" src={crenshaw} />
        </Col>
        <Col xs="7">
          <p className="description"> Nipsey Hussle Crenshaw Masked Poster</p>
        </Col>
      </Row>
      <Row>
        <h3 className="title">Freelance Projects</h3>
      </Row>

      <Row>
        <Col xs="5">
          <img id="jep" className="gallery-images" src={jepbyjep} />
        </Col>
        <Col xs="7">
          <p className="description"> JEP by JEP Logo</p>
        </Col>
      </Row>

      <Row>
        <Col xs="5">
          <img id="church" className="gallery-images" src={church} />
        </Col>
        <Col xs="7">
          <p className="description"> New Creation Church Logo</p>
        </Col>
      </Row>

      <Row>
        <Col xs="5">
          <img id="DJ" className="gallery-images" src={DJ} />
        </Col>
        <Col xs="7">
          <p className="description">DJ HVFF L</p>
        </Col>
      </Row>

      <Row>
        <Col xs="5">
          <img id="via" className="gallery-images" src={via} />
        </Col>
        <Col xs="7">
          <p className="description"> Via Puerta</p>
        </Col>
      </Row>

      <Row>
        <Col xs="5">
          <img id="front-bc" className="gallery-images" src={frontBC} />
        </Col>
        <Col xs="7">
          <p className="description"> Via Puerta front of business card</p>
        </Col>
      </Row>

      <Row>
        <Col xs="5">
          <img id="back-bc" className="gallery-images" src={backBC} />
        </Col>
        <Col xs="7">
          <p className="description"> Via puerta back of business card</p>
        </Col>
      </Row>

      <Row>
        <Col xs="5">
          <img id="veins" className="gallery-images" src={veins} />
        </Col>
        <Col xs="7">
          <p className="description"> VEINS logo type</p>
        </Col>
      </Row>

      <Row>
        <Col xs="5">
          <img id="veinsheart" className="gallery-images" src={veinsheart} />
        </Col>
        <Col xs="7">
          <p className="description">VEINS logo graphic</p>
        </Col>
      </Row>

      <Row>
        <Col xs="5">
          <img id="veinsshirt" className="gallery-images" src={veinsshirt} />
        </Col>
        <Col xs="7">
          <p className="description"> VEINS apparel graphic design</p>
        </Col>
      </Row>

      <Footer />
    </Container>
  );
};

export default Gallerypage

