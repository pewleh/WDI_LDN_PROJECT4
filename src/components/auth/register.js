import React from 'react';
import axios from 'axios';

import Auth from '../lib/Auth';

class Register extends React.Component {


  state = {}

  handleChange = ({ target: { name, value }  }) => {
    this.setState({ [name]: value }, () => console.log(this.state));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/register', this.state)
      .then( res => {
        Auth.setToken(res.data.token);
      })
      .then(() => this.props.history.push('/login'));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <label htmlFor="username">Username</label>
          <input className="input"
            placeholder="Username"
            name="username"
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            className="input"
            placeholder="Email"
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
        <div className="field">
          <label htmlFor="passwordConfirmation">Password Confirmation</label>
          <input
            type="password"
            className="input"
            placeholder="Password Confirmation"
            name="passwordConfirmation"
            onChange={this.handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="name">Prefered medium</label>
          <div className="control">
            <div className="select">
              <select name="rating">
                <option selected disabled value="">Please choose</option>
                <option value="acrylic">Acrylics</option>
                <option value="charcoal">Charcoal</option>
                <option value="chalk">Chalk</option>
                <option value="digital">Digital</option>
                <option value="ink">Ink</option>
                <option value="mixed-media">Mixed Media</option>
                <option value="oil">Oils</option>
                <option value="pencil">Pencil</option>
                <option value="pastel">Pastel</option>
                <option value="watercolour">Watercolour</option>
                <option value="spray-paint">Spray Paint</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label htmlFor="name">Prefered medium</label>
          <div className="control">
            <div className="select">
              <select name="rating">
                <option selected disabled value="">Please choose</option>
                <option value="acrylic">Acrylics</option>
                <option value="charcoal">Charcoal</option>
                <option value="chalk">Chalk</option>
                <option value="digital">Digital</option>
                <option value="ink">Ink</option>
                <option value="mixed-media">Mixed Media</option>
                <option value="oil">Oils</option>
                <option value="pencil">Pencil</option>
                <option value="pastel">Pastel</option>
                <option value="watercolour">Watercolour</option>
                <option value="spray-paint">Spray Paint</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label htmlFor="name">Prefered medium</label>
          <div className="control">
            <div className="select">
              <select name="rating">
                <option selected disabled value="">Please choose</option>
                <option value="acrylic">Acrylics</option>
                <option value="charcoal">Charcoal</option>
                <option value="chalk">Chalk</option>
                <option value="digital">Digital</option>
                <option value="ink">Ink</option>
                <option value="mixed-media">Mixed Media</option>
                <option value="oil">Oils</option>
                <option value="pencil">Pencil</option>
                <option value="pastel">Pastel</option>
                <option value="watercolour">Watercolour</option>
                <option value="spray-paint">Spray Paint</option>
              </select>
            </div>
          </div>
        </div>

        <button className="button is-primary">Submit</button>
      </form>
    );
  }
}

export default Register;
