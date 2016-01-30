import React, { Component } from 'react';

export default class App extends Component {
  render() {
    var d = new Date();
    var time = d.getTime();
    var style = { color: 'red'};
    return (
      <h1 style={style}>Hejo, world.{time}</h1>
    );
  }
}