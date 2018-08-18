import React, { Component } from 'react';
import './App.sass';
//import 'bootstrap/scss/bootstrap/bootstrap'
//import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.min'

import Navbar from './components/Navbar/Navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <main className="container">
        </main>
      </div>
    );
  }
}

export default App;
