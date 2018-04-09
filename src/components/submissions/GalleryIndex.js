//this page is a mess -> will redo once other components have been completed.
//Changed naming convention so come back here
import React from 'react';
import axios from 'axios';

// import { Link } from 'react-router-dom';

class GalleryIndex extends React.Component {

  state = {
    submissions: []
  }

  componentDidMount() {
    axios.get('/submissions')//might need to change naming convention here.
      .then(res => this.setState({ submissions: res.data }, () => console.log(this.state)));
  }

  render() {
    return (
      <div className="container">
        <ul className="columns is-multiline">
          <li key={i} className="column is-one-third">
            {/* <Link to={`/GalleryIndex/${submission._id}`}> */}
            <div className="card">
              <div className="card-content">
                {/* <h3 className="title is-4">{challengename}</h3> */}
                {/* <h4 className="subtitle">{username}</h4> */}
              </div>
            </div>
            {/* </Link> */}
          </li>
        </ul>
      </div>
    );
  }
}

export default GalleryIndex;
