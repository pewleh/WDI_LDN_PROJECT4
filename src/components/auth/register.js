import React from 'react';
import axios from 'axios';

import Auth from '../lib/Auth';

class Register extends React.Component {


  state = {}

  handleChange = ({ target: { name, value }  }) => {
    this.setState({ [name]: value }, () => console.log(this.state));
  }

  handleMediaSelect = (medium, index) => {
    const media = this.state.media ? [ ...this.state.media ] : [];
    media[index] = medium;
    this.setState({ media: media }, () => console.log(this.state));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/register', this.state)
      .then(res => {
        this.props.setUserId(res.data.user._id);
        Auth.setToken(res.data.token);
      })
      .then(() => this.props.history.push('/login'))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="container">
        <div className="register-box">
          <h1 className="register-title">Register</h1>
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
              <label htmlFor="image">Profile picture</label>
              <input className="input"
                placeholder="http://2.bp.blogspot.com/-Z-VdrdfcL7E/UBwzgRNGUqI/AAAAAAACWwA/ExJ8dZdMmu8/s1600/995526-088.jpg"
                name="image"
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
            <div className="medium-controls">
              <div className="field">
                <label htmlFor="name">Prefered medium</label>
                <div className="control">
                  <div className="select">
                    <select name="media" onChange={(e) => this.handleMediaSelect(e.target.value, 0)}>
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
                    <select name="media" onChange={(e) => this.handleMediaSelect(e.target.value, 1)}>
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
                    <select name="media" onChange={(e) => this.handleMediaSelect(e.target.value, 2)}>
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
            </div>
            <button className="button">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
