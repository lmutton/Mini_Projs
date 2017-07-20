import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PlusButton from './components/plus_button';
import MinusButton from './components/minus_button';

var App = React.createClass({

  getInitialState: function(){
    return {
      counter: 0
    }
  },

  onUserClickPlus: function (){
    var newCount = this.state.counter + 1;
    this.setState({
      counter: newCount
    })
  },

  onUserClickMinus: function (){
    var newCount = this.state.counter - 1;
    this.setState({
      counter: newCount
    })
  },

  render: function (){
    return (
      <div>
        <h3> Counter </h3>
        <PlusButton onUserClickPlus={this.onUserClickPlus} />
        <MinusButton onUserClickMinus={this.onUserClickMinus} />
        <h3>{this.state.counter}</h3>
      </div>
    );
  }
})



ReactDOM.render (<App />, document.querySelector('.container'));
