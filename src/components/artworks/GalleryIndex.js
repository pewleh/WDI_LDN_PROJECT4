
import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

class GalleryIndex extends React.Component {

  state = {
    artworks: []
  }

  componentDidMount() {
    axios.get('/api/artworks')
      .then(res => this.setState({ artworks: res.data }, () => console.log(this.state)));
  }

  render() {
    return (
      <div className="container">
        <div className="artworks-container">
          <ul className="columns is-multiline">
            {this.state.artworks.map((artwork, i) =>
              <li  key={i} className="column is-one-third">
                <Link to={`/artworks/${artwork._id}`}>
                  <div className="card">
                    <div className="card-content" key={i}>
                      <img src={artwork.image} />
                      <h1>{artwork.name}</h1>
                    </div>

                  </div>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default GalleryIndex;
