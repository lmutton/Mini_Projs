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
        <h2 className="title"> Push a Button </h2>
        <PlusButton onUserClickPlus={this.onUserClickPlus} />
        <MinusButton onUserClickMinus={this.onUserClickMinus} />
        <h1 className="number">{this.state.counter}</h1>
      </div>
    );
  }
})



ReactDOM.render (<App />, document.querySelector('.container'));
