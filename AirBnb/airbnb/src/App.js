import React, { Component } from 'react';
import './App.scss';
//import 'bootstrap/scss/bootstrap/bootstrap'
//import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.min'
import Jumbotron from './components/Jumbotron/Jumbotron'
import Navbar from './components/Navbar/Navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <main className="container-fluid">
        <Jumbotron/>
        </main>
      </div>
    );
  }
}

export default App;
