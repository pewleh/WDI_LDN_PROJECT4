import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

class ChallengesIndex extends React.Component{
  state = {
    challenges: []
  }

  componentDidMount() {
    axios.get('/api/challenges')
      .then(res => this.setState({ challenges: res.data }, () => console.log(this.state)));
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ search: e.target.value }, () => console.log(this.state));
  }

  render(){
    if (!this.state.challenges.length) return false;
    return(
      <div className="container">
        <section className="challengeIndex-container">
          <h1 className="challenge-title">This weeks challenges...</h1>
          <div className="updatable-data">
            <div>
              <img src={this.state.challenges[0].image} />
              <br />
              <br />
              <p className="description-paragraph">{this.state.challenges[0].description}</p>
            </div>
          </div>
          <div className="countdown-container">
            {/* set up a countdown for 168 hours */}
          </div>
          <Link className="button" to={'/challenges/submit'}>Submit!</Link>
          {/* ${this.props.match.params.id}  may need this  depending on how I go forward.*/}
        </section>
      </div>
    );
  }
}

export default ChallengesIndex;

//so really I need here an image and description that changes weekly and a countdown to the change.
