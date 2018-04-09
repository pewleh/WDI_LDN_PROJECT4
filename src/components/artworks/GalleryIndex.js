
import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

class GalleryIndex extends React.Component {

  state = {
    artworks: []
  }

  componentDidMount() {
    axios.get('/api/artworks')//might need to change naming convention here.
      .then(res => this.setState({ artworks: res.data }, () => console.log(this.state)));
  }

  render() {
    return (
      <div className="container">
        <ul className="columns is-multiline">
          <li className="column is-one-third">
            <Link to={`/GalleryIndex/${artwork._id}`}>
              <div className="card">
                <div className="card-content">
                  <h1>HELLO</h1>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default GalleryIndex;
