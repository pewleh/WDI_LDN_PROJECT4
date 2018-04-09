import React from 'react';
import axios from 'axios';

import Auth from '../lib/Auth';

import Flash from '../lib/Flash';
import Form from './Form';

class ChallengeSubmit extends React.Component {

  state = {
    name: '',
    artist: '',
    releaseDate: '',
    genre: '',
    album: '',
    errors: {}
  }

  handleChange = ({ target: { name, value }  }) => {
    const errors = Object.assign({}, this.state.errors, { [name]: ''});
    this.setState({ [name]: value, errors }, () => console.log(this.state));
  }

  handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/api/bangers', this.state, {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => Flash.setMessages('success', 'Succesfully Created a baannger!'))
      .then(() => this.props.history.push('/gallery/index'))
      .catch(err => this.setState({ errors: err.response.data.errors}));
  }

  render() {
    return (
      <div className="container">
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          data={this.state} />
      </div>
    );
  }
}

export default ChallengeSubmit;
