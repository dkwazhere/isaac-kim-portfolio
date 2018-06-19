import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';
import Header from './components/Navbar';
import Aboutme from './components/Aboutme';
import Topintro from './components/Topintro';
import Gallery from './components/Gallery';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Topintro />
        <Aboutme />
        <Gallery />
      </div>
    );
  }
}

export default App;
