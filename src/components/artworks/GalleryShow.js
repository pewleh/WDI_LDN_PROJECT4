import React from 'react';
import axios from 'axios';

class GalleryShow extends React.Component {
  state = {
    artwork: null
  }

  componentDidMount() {
    axios.get(`/api/artworks/${this.props.match.params.id}`)
      .then(res => this.setState({ artwork: res.data }, () => console.log(this.state.artwork)));
  }


  render() {
    if(!this.state.artwork) return null;
    return (
      <div className="container">
        <div className="artworks-container">
          <section>
            <h1 className="submitted-title">{this.state.artwork.name}</h1>
            <div className="image-container">
              <img className="submitted-image" src={this.state.artwork.image}/>
              <div className="media-block">
                {this.state.artwork.media && this.state.artwork.media.map((medium, i) =>
                  <img className="artwork-medium" key={i} src={`/assets/images/${medium}.svg`} />
                )}
              </div>
              <p>{this.state.artwork.description}</p>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default GalleryShow;
