import React, { Component } from 'react';
import { render } from 'react-dom';
import Welcome from './components/Welcome.js'
import Explore from './components/Explore.js'
import './index.css'; // remove this when creating a new project
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Welcome />
        <Explore />
      </div>
    );
  }
}

export default App;
