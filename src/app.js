import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/common/Navbar';
import FlashMessages from './components/common/FlashMessages';

import Register from './components/auth/Register';
import Login from './components/auth/Login';

import ChallengesIndex from './components/challenges/ChallengesIndex';
import ChallengesSubmit from './components/challenges/ChallengesSubmit';

import GalleryIndex from './components/artworks/GalleryIndex';
import GalleryShow from './components/artworks/GalleryShow';
import Help from './components/info/Help';
import Profile from './components/info/User';

import './assets/scss/style.scss';

import 'bulma';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Navbar />
          <FlashMessages />

          <Switch>
            <Route path="/challenges/submit" component={ChallengesSubmit} />
            <Route path="/artworks/:id" component={GalleryShow} />
            <Route path="/challenges" component={ChallengesIndex} />
            <Route path="/artworks" component={GalleryIndex} />
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
