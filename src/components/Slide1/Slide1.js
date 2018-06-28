import React, {Component} from 'react';
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
import "./Slide1.css";

var fn = function () {
    /* do you want */
  }

class Slide1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
          active: 0
        };
      }



      _handleClick() {
        var num = Math.floor(Math.random() * 10 + 1);
        this.setState({
          active: num
        });
      }

      render () {
          return (
              <div className="slide-div">
                  <h1>Academic Projects</h1>
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
          />
          <img
            src={eazye}
            alt="The Legacy of Eazy-E Advertisement"
            data-action="http://passer.cc"
          />
          <img
            src={tupac}
            alt="2Pac To Live & Die in LA Album Design"
            data-action="#"
          />
          <img src={VL} alt="Visual Langauge Typography" data-action="" />
          <img
            src={marlboro}
            alt="Nipsey Hussle Crenshaw Cigarette Box"
            data-action="#"
          />
          <img
            src={redcrenshaw}
            alt="Nipsey Hussle Crenshaw Mixtape Poster"
            data-action="#"
          />
          <img
            src={crenshaw}
            alt="Nipsey Hussle Crenshaw Masked Poster"
            data-action="#"
          />
        </Coverflow>
        <br />
        <br />
                  </div>
          )
      }
}

export default Slide1
