import React from 'react';
import axios from 'axios';

import Auth from '../lib/Auth';

import Flash from '../lib/Flash';
import Form from './Form';

class ChallengeSubmit extends React.Component {

  state = {
    name: '',
    image: '',
    media: ['', '', ''],
    errors: {}
  }

  handleChange = ({ target: { name, value }  }) => {
    const errors = Object.assign({}, this.state.errors, { [name]: ''});
    this.setState({ [name]: value, errors }, () => console.log(this.state));
  }
  handleMediaSelect = (medium, index) => {
    const media = this.state.media ? [ ...this.state.media ] : [];
    media[index] = medium;
    this.setState({ media: media }, () => console.log(this.state));
  }
  handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/api/artworks', this.state, {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => Flash.setMessages('success', 'Your post has been submitted!'))
      .then(() => this.props.history.push('/artworks'))
      .catch(err => this.setState({ errors: err.response.data.errors}));

  }

  render() {
    return (
      <div className="container">
        <div className="challengeIndex-container">
          <section className="challengeSubmit-container">
            <Form
              handleChange={this.handleChange}
              handleMediaSelect={this.handleMediaSelect}
              handleSubmit={this.handleSubmit}
              data={this.state} />
          </section>
        </div>
      </div>
    );
  }
}

export default ChallengeSubmit;
