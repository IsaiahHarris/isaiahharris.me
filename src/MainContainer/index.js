import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
class MainContainer extends Component {
  render() {
    return (
      <div className="main-container">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}
export default MainContainer;
