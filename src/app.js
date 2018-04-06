import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/common/Navbar';
import FlashMessages from './components/common/FlashMessages';

import Register from './components/auth/Register';
import Login from './components/auth/Login';

import ChallengeIndex from './components/challenges/ChallengeIndex';
import ChallengeSubmit from './components/challenges/ChallengeSubmit';
import Help from './components/info/Help';
import Profile from './components/info/User';


import 'bulma';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Navbar />
          <FlashMessages />
          <Switch>
            <Route path="/challenge/submit" component={ChallengeSubmit} />
            <Route path="/challenge" component={ChallengeIndex} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/help" component={Help} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
