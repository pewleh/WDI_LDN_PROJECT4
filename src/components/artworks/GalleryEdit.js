import React from 'react';
import axios from 'axios';

import Auth from '../lib/Auth';

import Flash from '../lib/Flash';
import Form from '../challenges/Form';

class GalleryEdit extends React.Component {

  state = {
    name: '',
    image: '',
    media: ['', '', ''],
    errors: {}
  }

  componentDidMount() {
    axios.get(`/api/artworks/${this.props.match.params.id}`)
      .then(res => this.setState(res.data, () => console.log(this.state)));
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

    axios({
      method: 'PUT',
      url: `/api/artworks/${this.props.match.params.id}`,
      headers: { Authorization: `Bearer ${Auth.getToken()}` },
      data: this.state
    })
      .then(() => Flash.setMessages('success', 'Your post has been updated!'))
      .then(() => this.props.history.push(`/artworks/${this.props.match.params.id}`))
      .catch(err => this.setState({ errors: err.response.data.errors}));
  }

  render() {
    return (
      <div className="container">
        <section className="challengeSubmit-container">
          <Form
            handleChange={this.handleChange}
            handleMediaSelect={this.handleMediaSelect}
            handleSubmit={this.handleSubmit}
            data={this.state} />
        </section>
      </div>
    );
  }
}

export default GalleryEdit;
