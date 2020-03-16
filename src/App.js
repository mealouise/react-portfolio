import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Portfolio from './components/Portfolio.js'
import Contact from './components/Contact.js'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Navbar />
       <Switch>
          <Route path='/' component={Home}  exact/>
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contact' component={Contact} />
       </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
