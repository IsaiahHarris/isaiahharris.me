import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Skills from '../Skills';
class MainContainer extends Component {
  render() {
    return (
      <div className="main-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
        </Switch>
      </div>
    );
  }
}
export default MainContainer;
