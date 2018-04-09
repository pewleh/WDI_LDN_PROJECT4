import React from 'react';
import axios from 'axios';

class GalleryShow extends React.Component {
  state = {
    artwork: null
  }

  componentDidMount() {
    axios.get(`/artworks/${this.props.match.params.id}`)
      .then(res => this.setState({ artwork: res.data }, () => console.log(this.state.artwork)));
  }


  render() {
    if(!this.state.artwork) return null;
    return (
      <section>
        <h1>{this.state.artwork.name}</h1>
        <h1>{this.state.artwork.image}</h1>
        <h2>{this.state.user.name}</h2>
      </section>
    );
  }
}

export default GalleryShow;
