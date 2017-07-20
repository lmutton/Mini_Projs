import React, { Component } from 'react';

var PlusButton = React.createClass ({
  render: function (){
    return (
        <button className='btn' onClick={this.props.onUserClickPlus}><i className="fa fa-plus" aria-hidden="true"></i></button>
    );
  }
});

export default PlusButton;
