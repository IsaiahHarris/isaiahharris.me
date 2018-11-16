import React, { Component } from 'react';
import './App.css';
import Header from '../Header';
import MainContainer from '../MainContainer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainContainer />
      </div>
    );
  }
}

export default App;
