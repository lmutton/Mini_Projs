import React, { Component } from 'react';

var PlusButton = React.createClass ({
  render: function (){
    return (
      <div>
        <button class='submit' onClick={this.props.onUserClickPlus}>+</button>
      </div>

    );
  }
});

export default PlusButton;
