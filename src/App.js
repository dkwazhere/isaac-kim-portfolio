import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';
import Header from './components/Navbar';
import Topintro from './components/Topintro';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Topintro />
      </div>
    );
  }
}

export default App;
