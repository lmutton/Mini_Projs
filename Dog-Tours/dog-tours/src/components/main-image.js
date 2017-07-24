//show main image with a description
import React, { Component } from 'react';

class MainImage extends Component {
  render(){
    return(
      <div>
        <img src={require("../images/byriver.jpg")} alt="River" className="main-image" />
      </div>
    );
  }
}

export default MainImage;
