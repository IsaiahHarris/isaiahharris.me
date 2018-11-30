import React from 'react';
import { Route, Switch } from 'react-router-dom';
import home from '../Home';
import about from '../About';
import skills from '../Skills';
import education from '../Education';
import Contact from '../Contact';
import './MainContainer.scss';
const mainContainer = props => (
  <div className="main-container">
    <Switch>
      <Route exact path="/" component={home} />
      <Route exact path="/about" component={about} />
      <Route exact path="/skills" component={skills} />
      <Route exact path="/education" component={education} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </div>
);

export default mainContainer;
