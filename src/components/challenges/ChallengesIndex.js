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
          <h1 className="challenge-title">This week&apos;s challenges...</h1>

          <div className="updatable-data">
            <div>
              <div className="countdown-container">
                {/* Add a countdown here -> post mvp(bit of a headache in React) */}
                <p>Ends on: <br />{this.state.challenges[0].endTime}</p>
              </div>
              <img src={this.state.challenges[0].image} />
              <br />
              <br />
              <p className="description-paragraph">{this.state.challenges[0].description}</p>
            </div>
          </div>
          <Link className="button" to={'/challenges/submit'}>Submit!</Link>
        </section>
      </div>
    );
  }
}

export default ChallengesIndex;
