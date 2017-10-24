import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import {Home, WhatWeDo, WhoWeAre, Projects, Careers, Contact} from './Content.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={require('./Dobis/HomeOffice.jpg')} id="bg" alt="" />
        <div className="App-header">
          <img className="logo-image" src={require('./Dobis/Logo.png')} />
          <div className="header-lines">
            <div className="header-top-line"></div>
              <div className="header-bottom-line"></div>
          </div>
        </div>
        <Router>
          <div>
            <div className="nav-list">
              <ul>
                <li><Link to="/home" >Home</Link></li>
                <li><Link to="/whatwedo" >What We Do</Link></li>
                <li><Link to="/whoweare" >Who We Are</Link></li>
                <li><Link to="/projects" >Projects</Link></li>
                <li><Link to="/careers" >Careers</Link></li>
                <li><Link to="/contact" >Contact</Link></li>
              </ul>
            </div>
            <div className="App-body">
              <Redirect from="/" exact to="/home" />
              <Route path="/home" component={Home}/>
              <Route path="/whatwedo" component={WhatWeDo}/>
              <Route path="/whoweare" component={WhoWeAre}/>
              <Route path="/projects" component={Projects}/>
              <Route path="/careers" component={Careers}/>
              <Route path="/contact" component={Contact}/>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
