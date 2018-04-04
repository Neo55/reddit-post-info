import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopicsScreen from './containers/TopicsScreen'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopicsScreen></TopicsScreen>
      </div>
    );
  }
}

export default App;
