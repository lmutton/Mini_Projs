import React, { Component } from 'react';

var MinusButton = React.createClass ({
  render: function (){
    return (
          <button className='btn' onClick={this.props.onUserClickMinus}><i className="fa fa-minus" aria-hidden="true"></i>
</button>
    );
  }
});

export default MinusButton;
