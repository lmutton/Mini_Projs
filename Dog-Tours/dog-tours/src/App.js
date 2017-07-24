import React, { Component } from 'react';
import './App.css';
import MainImage from './components/main-image';
import ImageList from './components/image-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Dog Tours</h2>
          <h3>...with Leeloo</h3>
        </div>
        <MainImage />
        <ImageList />
      </div>
    );
  }
}

export default App;
