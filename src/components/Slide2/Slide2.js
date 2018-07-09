import React,{Component} from 'react'
import Coverflow from "react-coverflow";
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
import "./Slide2.css";

var fn = function () {
    /* do you want */
  }

class Slide2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
          active: 0
        };
      }

    render() {
        return (
            <div className="slide-two">
                <h1 className="freelance-div">Freelance Projects</h1>
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
          <img src={jepbyjep} alt="Album two" data-action="/gallery" />
          <img src={church} alt="Album three" data-action="/gallery" />
          <img src={DJ} alt="Album four" data-action="/gallery" />
          <img src={via} alt="Album five" data-action="/gallery" />
          <img src={frontBC} alt="Album six" data-action="/gallery" />
          <img
            src={backBC}
            alt="Album seven"
            data-action="/gallery"
          />
          <img
            src={veins}
            alt="Album one"
            data-action="/gallery"
          />
          <img
            src={veinsheart}
            alt="Album two"
            data-action="/gallery"
          />
          <img
            src={veinsshirt}
            alt="Album three"
            data-action="/gallery"
          />
        </Coverflow>
                </div>
        )
    }
}

export default Slide2
