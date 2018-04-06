import React from 'react';
import axios from 'axios';

import Auth from '../lib/Auth';
import Flash from '../lib/Flash';

class Login extends React.Component {


  state = {}

  handleChange = ({ target: { name, value }  }) => {
    this.setState({ [name]: value }, () => console.log(this.state));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/login', this.state)
      .then( res => Auth.setToken(res.data.token))
      .then(() => Flash.setMessages('success', 'Welcome back!'))
      .then(() => this.props.history.push('/challenge'));
  }

  render() {
    return ( //come back and check if you can make user OR email.
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input className="input"
            placeholder="email"
            name="email"
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            name="password"
            onChange={this.handleChange}
          />
        </div>


        <button className="button is-primary">Submit</button>
      </form>
    );
  }
}

export default Login;
