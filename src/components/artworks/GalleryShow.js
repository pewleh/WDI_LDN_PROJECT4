import React from 'react';
import axios from 'axios';

import Counter from '../common/Counter';
import Auth from '../lib/Auth';


class GalleryShow extends React.Component {
  state = {
    artwork: null,
    userId: ''
  }

  componentDidMount() {
    const userId = Auth.getPayload().sub;
    axios.get(`/api/artworks/${this.props.match.params.id}`)
      .then(res => this.setState({ artwork: res.data, userId: userId }));
  }

  like = () => {
    const artwork = Object.assign({}, this.state.artwork);
    if (artwork.likes.includes(this.state.userId)) return false;
    artwork.likes.push(this.state.userId);
    axios.put(`/api/artworks/${artwork._id}`, artwork, {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(res => {
        console.log(res.data);
        this.setState({ artwork: res.data });
      })
      .catch(err => console.error(err));
  }

  render() {
    if(!this.state.artwork) return null;
    console.log(this.state.artwork);
    // console.log('artist:', this.state.artwork.createdBy);
    return (
      <div className="container">
        <div className="artworks-container">
          <section>
            <h1 className="submitted-title">{this.state.artwork.name}</h1>
            {this.state.artwork.createdBy && <h2 className="submitted-subtitle">{this.state.artwork.createdBy.username}</h2>}
            <div className="image-container">
              <img className="submitted-image" src={this.state.artwork.image}/>
              <div className="media-block">
                {this.state.artwork.media && this.state.artwork.media.map((medium, i) =>
                  <img className="artwork-medium" key={i} src={`/assets/images/${medium}.svg`} />
                )}
              </div>
              <p>{this.state.artwork.description}</p>
              <Counter artwork={this.state.artwork} like={this.like} />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default GalleryShow;
