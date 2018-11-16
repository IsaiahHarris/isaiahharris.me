import React, { Component } from 'react';
import './App.css';
import Header from '../Header';
import MainContainer from '../MainContainer';
import SideBar from '../SideBar';
import BackDrop from '../BackDrop';
class App extends Component {
  state = {
    sideBarOpen: false
  };
  toggleSideBar = () => {
    this.setState(prevState => {
      return { sideBarOpen: !prevState.sideBarOpen };
    });
  };
  backdropClickHandler = () => {
    this.setState({ sideBarOpen: false });
  };
  render() {
    let backdrop;
    if (this.state.sideBarOpen) {
      backdrop = <BackDrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="App">
        <Header sideBarClickHandler={this.toggleSideBar} />
        <SideBar
          show={this.state.sideBarOpen}
          click={this.backdropClickHandler}
        />
        {backdrop}
        <MainContainer />
      </div>
    );
  }
}

export default App;
