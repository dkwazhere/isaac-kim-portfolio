import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import Gallerypage from "./pages/Gallery";

const App = () =>
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/gallery" component={Gallerypage} />
        </Switch>
    </Router>

export default App;
