import React, { Component } from 'react';
import './Home.css';
import Header from '../../components/Navbar';
import Aboutme from '../../components/Aboutme';
import Topintro from '../../components/Topintro';
import Gallery from '../../components/Gallery';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Coverflow from 'react-coverflow';
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

var fn = function () {
  /* do you want */  
}

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0
    };
  }

  _handleClick() {
    var num = Math.floor((Math.random() * 10) + 1);
    this.setState({
      active: num
    });
  }

  render() {
    return (
      <div className="home">
        <Header/>
        <Topintro />
        <Aboutme />
        <Coverflow
          width={960}
          height={350}
          displayQuantityOfSide={2}
          navigation={true}
          enableHeading={false}
          active={this.state.active}
        >
          <div
            onClick={() => fn()}
            onKeyDown={() => fn()}
            role="menuitem"
            tabIndex="0"
          >
          </div>
          <img src={eazye} alt='The Legacy of Eazy-E Advertisement'
          data-action="http://passer.cc"/>
          <img src={tupac} alt='2Pac To Live & Die in LA Album Design' data-action="#"/>
          <img src={VL} alt='Visual Langauge Typography' data-action=""/>
          <img src={marlboro} alt='Nipsey Hussle Crenshaw Cigarette Box' data-action="#"/>
          <img src={redcrenshaw} alt='Nipsey Hussle Crenshaw Mixtape Poster' data-action="#"/>
          <img src={crenshaw} alt='Nipsey Hussle Crenshaw Masked Poster'  data-action="#"/>
        </Coverflow>
        <br />
        <br />

        <Coverflow
          width={960}
          height={350}
          displayQuantityOfSide={2}
          navigation={true}
          enableHeading={false}
          active={this.state.active}
        >
          <div
            onClick={() => fn()}
            onKeyDown={() => fn()}
            role="menuitem"
            tabIndex="0"
          >
          </div>
          <img src={jepbyjep} alt='Album two' data-action="http://passer.cc"/>
          <img src={church} alt='Album three' data-action="https://doce.cc/"/>
          <img src={DJ} alt='Album four' data-action="http://tw.yahoo.com"/>
          <img src={via} alt='Album five' data-action="http://www.bbc.co.uk"/>
          <img src={frontBC} alt='Album six' data-action="https://medium.com"/>
          <img src={backBC} alt='Album seven' data-action="http://www.google.com"/>
          <img src={veins} alt='Album one' data-action="https://facebook.github.io/react/"/>
          <img src={veinsheart} alt='Album two' data-action="http://passer.cc"/>
          <img src={veinsshirt} alt='Album three' data-action="https://doce.cc/"/>
        </Coverflow>

        <Contact />
        <Footer  />
      </div>
    );
  }
}

export default Home;
