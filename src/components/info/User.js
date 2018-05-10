import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';


class Profile extends React.Component{

  state = {
    artworks: [],
    user: []
  }

  componentDidMount(){
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }));

    axios.get('/api/artworks')
      .then(res => this.setState({ artworks: res.data }));
  }

  render(){
    console.log(this.state);
    const filtered = this.state.artworks.filter(artwork => artwork.createdBy === this.state.user._id);
    console.log(filtered);
    return(
      <div className="container">
        <section className="profile-container">
          <div className="upper-profile-container">
            <div className="personal-info">
              <img className="profile-image" src={this.state.user.image} />
              <h1 className="profile-title">{this.state.user.username}</h1>
              {/* <p>ranking</p>    dont uncheck NOT MVP*/}
            </div>
            <div className="profile-medium-block">
              {this.state.user.media && this.state.user.media.map((medium, i) =>
                <img className="profile-medium" key={i} src={`/assets/images/${medium}.svg`} />
              )}
            </div>
          </div>
          <div className="submission-container">

            <div className="inner-submission-container">
              <h1 className="inner-submission-title"> Work by {this.state.user.username} </h1>
              <ul className="columns is-multiline">
                {filtered.map((artwork, i) =>
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
          <div className="fave-users-container">
            {/* array of favourited users */}
          </div>
        </section>
      </div>
    );
  }
}

export default Profile;
