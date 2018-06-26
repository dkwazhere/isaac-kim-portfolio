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
            <div>
                <h1>Freelance Projects</h1>
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
          <img src={jepbyjep} alt="Album two" data-action="http://passer.cc" />
          <img src={church} alt="Album three" data-action="https://doce.cc/" />
          <img src={DJ} alt="Album four" data-action="http://tw.yahoo.com" />
          <img src={via} alt="Album five" data-action="http://www.bbc.co.uk" />
          <img src={frontBC} alt="Album six" data-action="https://medium.com" />
          <img
            src={backBC}
            alt="Album seven"
            data-action="http://www.google.com"
          />
          <img
            src={veins}
            alt="Album one"
            data-action="https://facebook.github.io/react/"
          />
          <img
            src={veinsheart}
            alt="Album two"
            data-action="http://passer.cc"
          />
          <img
            src={veinsshirt}
            alt="Album three"
            data-action="https://doce.cc/"
          />
        </Coverflow>
                </div>
        )
    }
}

export default Slide2