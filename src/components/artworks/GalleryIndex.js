
import React from 'react';
import axios from 'axios';


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
        <ul className="columns is-multiline">
          <li className="column is-one-third">
            <div className="card">
              <div className="card-content">
                <h1>HELLO</h1>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default GalleryIndex;
