import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

class ChallengeIndex extends React.Component{
  state = {
    challenges: []
  }

  componentDidMount() {
    axios.get('/challenges')
      .then(res => this.setState({ challenges: res.data }, () => console.log(this.state)));
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ search: e.target.value}, () => console.log(this.state));
  }
  render(){
    return(
      <section className="challenge-index-container">
        <h1>This weeks challenge...</h1>
        <div className="updatable-data">
          {/* image and description -> probably through an array and a timeout? */}
        </div>
        <div className="countdown-container">
          {/* set up a countdown for 168 hours */}
        </div>
        <Link className="button" to={'/challenge/submit'}>Submit!</Link>
        {/* ${this.props.match.params.id}  may need this  depending on how I go forward.*/}
      </section>
    );
  }
}

export default ChallengeIndex;

//so really I need here an image and description that changes weekly and a countdown to the change.
