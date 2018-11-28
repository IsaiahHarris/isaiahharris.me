import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Skills from '../Skills';
import education from '../Education';

const mainContainer = props => (
  <div className="main-container">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/skills" component={Skills} />
      <Route exact path="/education" component={education} />
    </Switch>
  </div>
);

export default mainContainer;
