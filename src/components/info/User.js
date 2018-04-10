import React from 'react';
import axios from 'axios';
// import Auth from '../lib/Auth';

class Profile extends React.Component{

  state = {
    user: []
  }

  componentDidMount(){
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }, () => console.log(this.state.user)));
  }
  render(){
    return(
      <div className="container">
        <section className="profile-container">
          <div className="personal-info">
            <img className="profile-image" src={this.state.user.image} />
            <h1 className="profile-title">{this.state.user.username}</h1>
            {/* <p>ranking</p>    dont uncheck NOT MVP*/}
          </div>
          {this.state.user.media && this.state.user.media.map((medium, i) =>
            <img className="profile-medium" key={i} src={`/assets/images/${medium}.svg`} />
          )}
          <div className="submission-container">
            {/* array of submitted work -> everytime a submission is made it should be pushed into this array */}
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
