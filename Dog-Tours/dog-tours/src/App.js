import React, { Component } from 'react';
import './App.css';
import Gallery from './components/gallery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          <h2>Dog Tours</h2>
          <h3>...with Leeloo</h3>
        </div>
        <Gallery />

      </div>
    );
  }
}

export default App;
