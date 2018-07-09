import React, { Component } from "react";
import "./Home.css";
import Header from "../../components/Navbar";
import Aboutme from "../../components/Aboutme";
import Topintro from "../../components/Topintro";
import Gallery from "../../components/Gallery";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Coverflow from "react-coverflow";
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
import Slide1 from "../../components/Slide1";
import Slide2 from "../../components/Slide2";
import Scrollspy from 'react-scrollspy'
import image from '../../images/whitelogo.png';

class Home extends Component {

  render() {
    return (
      <div className="home">
        <div className="ss-nav">
          <Scrollspy items={ ['section-1', 'section-2', 'section-3', 'section-4', 'section-5'] } currentClassName="is-current">
            <li><a className="navbar-home" href="#section-1"> Home  </a></li>
            <li><a className="navbar-about" href="#section-2"> About Me  </a></li>
            <li><a className="navbar-logo" href="#section-3"><img className="logo-img" src={image}></img></a></li>
            <li><a className="navbar-projects" href="#section-4"> Projects  </a></li>
            <li><a className="navbar-contact" href="#section-5"> Contact  </a></li>
          </Scrollspy>
        </div>

      <div className="container-page">
        <section id="section-1"><Topintro /></section>
        <section id="section-2"><Aboutme /></section>
        <section id="section-4"><Slide1 /></section>
        <section id="section-4"><Slide2 /></section>
        <section id="section-5"><Contact /></section>
        <Footer />
      </div>


      </div>
    );
  }
}

export default Home;
