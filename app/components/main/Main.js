import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../views/Home';
import Candidates from '../../views/Candidates';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/candidates" component={Candidates} />
    </Switch>
  </main>
);

export default Main;
