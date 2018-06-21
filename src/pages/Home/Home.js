import React, { Component } from 'react';
import './Home.css';
import Header from '../../components/Navbar';
import Aboutme from '../../components/Aboutme';
import Topintro from '../../components/Topintro';
import Gallery from '../../components/Gallery';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header/>
        <Topintro />
        <Aboutme />
        <Gallery />
        <Contact />
        <Footer  />
      </div>
    );
  }
}

export default Home;
