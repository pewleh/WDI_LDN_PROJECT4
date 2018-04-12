import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from '../lib/Auth';
import Flash from '../lib/Flash';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  !Auth.isAuthenticated() && Flash.setMessages('danger', 'Log in to make changes!');
  return(
    <Route {...rest} render={props =>
      Auth.isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
    />
  );
};


export default ProtectedRoute;
