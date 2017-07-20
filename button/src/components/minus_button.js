import React, { Component } from 'react';

var MinusButton = React.createClass ({
  render: function (){
    return (
        <div>
          <button class='submit' onClick={this.props.onUserClickMinus}>-</button>
        </div>
    );
  }
});

export default MinusButton;
