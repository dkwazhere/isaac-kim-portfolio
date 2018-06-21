import React, { Component } from 'react';
import './App.css';
import { Router, Route, Link, Switch } from 'react-router';
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

const App = () =>
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/gallery" component={Gallery} />
        </Switch>
    </Router>

export default App;
