import React from 'react';
import axios from 'axios';

class GalleryShow extends React.Component {
  state = {
    submission: null
  }

  componentDidMount() {
    axios.get(`/submissions/${this.props.match.params.id}`)
      .then(res => this.setState({ submission: res.data }, () => console.log(this.state.submission)));
  }


  render() {
    if(!this.state.submission) return null;
    return (
      <section>
        <h1>{this.state.submission.name}</h1>
        <h1>{this.state.submission.image}</h1>
        <h2>{this.state.user.name}</h2>
      </section>
    );
  }
}

export default GalleryShow;
