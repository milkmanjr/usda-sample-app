import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/header'
import Footer from './components/footer'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import {Home, Search, Detail} from './pages/index.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />

          <Route exact path="/" component={Home} />
          <Route exact path="/food-search/:query" component={Search} />
          <Route exact path="/detail/:id" component={Detail} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
