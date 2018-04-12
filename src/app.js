import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/common/Navbar';
import FlashMessages from './components/common/FlashMessages';
import ProtectedRoute from './components/common/ProtectedRoute';
import NotFound from './components/common/NotFound';

import Register from './components/auth/Register';
import Login from './components/auth/Login';

import ChallengesIndex from './components/challenges/ChallengesIndex';
import ChallengesSubmit from './components/challenges/ChallengesSubmit';

import GalleryEdit from './components/artworks/GalleryEdit';
import GalleryIndex from './components/artworks/GalleryIndex';
import GalleryShow from './components/artworks/GalleryShow';
import Help from './components/info/Help';
import Profile from './components/info/User';

import Auth from './components/lib/Auth';


import './assets/scss/style.scss';

import 'bulma';

class App extends React.Component {

  state = {
    userId: ''
  }

  componentDidMount(){
    const userId = Auth.getPayload().sub;
    this.setState({ userId: userId }, () => console.log(this.state.userId));
  }

  setUserId = (userId) => {
    this.setState({ userId: userId });
  }

  render() {
    return (
      <BrowserRouter>
        <main>
          <Navbar userId={this.state.userId} />
          <FlashMessages />

          <Switch>
            <ProtectedRoute path="/artworks/:id/edit" component={GalleryEdit} />
            <ProtectedRoute path="/challenges/submit" component={ChallengesSubmit} />
            <Route path="/artworks/:id" component={GalleryShow} />
            <Route path="/challenges" component={ChallengesIndex} />
            <Route path="/artworks" component={GalleryIndex} />
            <Route path="/register" render={props => <Register {...props} setUserId={this.setUserId} />} />
            <Route path="/login" render={props => <Login {...props} setUserId={this.setUserId} />} />
            <Route path="/help" component={Help} />
            <Route path="/profile/:id" component={Profile} />
            <Route component={NotFound} />
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
