//show main image with a description
import React, { Component } from 'react';


const dogImages = [
  require("../images/arelake.jpg"),
  require("../images/bylake2.jpg"),
  require("../images/byriver.jpg"),
  require("../images/dock.jpg"),
  require("../images/flatrocks.jpg"),
  require("../images/happywaterfall.jpg"),
  require("../images/lostfields.jpg"),
  require("../images/onbench.jpg"),
  require("../images/topoffall.jpg"),
  require("../images/traintracks.jpg"),
  require("../images/waterfall.jpg"),


];

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: dogImages,
      selectedImage: dogImages[0]
    }
  }

  handleThumbClick(selectedImage){
    this.setState({
      selectedImage
    })
  }

  render(){
    const {images, selectedImage} = this.state;
    return(

      <div className="image-gallery">
   <div className="gallery-image">
     <div>
       <img src={selectedImage} alt="Selected Image" />
     </div>
   </div>
   <div className="image-list">

   {images.map((image, index) => (
     <div key={index} onClick={this.handleThumbClick.bind(this, image)}>
       <img src={image} />
     </div>
   ))}

   </div>
 </div>



    );
  }
}

export default Gallery;
