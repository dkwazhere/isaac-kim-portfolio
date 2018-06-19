import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';
import Header from './components/Navbar';
import Aboutme from './components/Aboutme';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Aboutme />
      </div>
    );
  }
}

export default App;
