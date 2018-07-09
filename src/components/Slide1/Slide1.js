import React, { Component } from 'react';
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
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};
Modal.setAppElement('#root');

class Slide1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      active: 0
    };

    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  // afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   this.subtitle.style.color = '#f00';
  // }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }


  _handleClick() {
    var num = Math.floor(Math.random() * 10 + 1);
    this.setState({
      active: num
    });
  }

  render() {
    return (
      <div className="slide-div">
        <h1 className="academic">Academic Projects</h1>
        <Coverflow
          width={960}
          height={350}
          displayQuantityOfSide={2}
          navigation={true}
          enableHeading={false}
          active={this.state.active}
          clickable={true}
        >
          <div
            role="menuitem"
            tabIndex="0"
          />

          <div>
            <img
              src={eazye}
              alt="The Legacy of Eazy-E Advertisement"
              data-action="/gallery"
              onClick={this.openModal}
              height={225}
            />

            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >

              <h2 ref={subtitle => this.subtitle = subtitle}>The Legacy of Eazy-E Advertisement</h2>
              <img id="eazye" src={eazye}></img>
              <button onClick={this.closeModal}>close</button>
            </Modal>
          </div>

          <div>
            <img
              src={tupac}
              alt="2Pac To Live & Die in LA Album Design"
              data-action="/gallery"
              onClick={this.openModal}
              height={150}
              width={200}
            />
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >

              <h2 ref={subtitle => this.subtitle = subtitle}>2Pac To Live & Die in LA Album Design</h2>
              <img src={tupac}></img>
              <button onClick={this.closeModal}>close</button>
            </Modal>
          </div>

          <div>
            <img src={VL} alt="Visual Langauge Typography" height={200} width={200} onClick={this.openModal} data-action="/gallery" />

            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >

              <h2 ref={subtitle => this.subtitle = subtitle}>Visual Langauge Typography</h2>
              <img id="VL" src={VL}></img>
              <button onClick={this.closeModal}>close</button>
            </Modal>
          </div>


          <img
            src={marlboro}
            alt="Nipsey Hussle Crenshaw Cigarette Box"
            data-action="/gallery"
            onClick={this.openModal}

          />
          <img
            src={redcrenshaw}
            alt="Nipsey Hussle Crenshaw Mixtape Poster"
            data-action="/gallery"
            onClick={this.openModal}

          />
          <img
            src={crenshaw}
            alt="Nipsey Hussle Crenshaw Masked Poster"
            data-action="/gallery"
            onClick={this.openModal}
          />
        </Coverflow>
        <br />
        <br />
      </div>
    )
  }
}

export default Slide1
