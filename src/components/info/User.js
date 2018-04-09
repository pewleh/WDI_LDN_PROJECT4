import React from 'react';

class Profile extends React.Component{

  state = {
    username: '',
    // ranking: '' //not quite mvp.//soooon//sooooooooon.
    mediums: '',
    bio: '',
    submissions: [],
    faveUsers: []
  }
  render(){
    return(
      <div className="container">
        <section className="profile-container">
          <div className="personal-info">
            <h1>render check(profile)</h1>
            {/* <h1>username</h1> */}
            {/* <p>ranking</p>    dont uncheck NOT MVP*/}
            {/* <p>bio</p> */}
            {/* mediums */}
          </div>
          <div className="submission-container">
            {/* array of submitted work -> everytime a submission is made it should be pushed into this array */}
          </div>
          <div className="fave-users-container">
            {/* array of favourited users*/}
          </div>
        </section>
      </div>
    );
  }
}

export default Profile;
