import React from 'react';

import { Link } from 'react-router-dom';


const Home = () => {
  return(
    <div className="container">
      <div className="error-container">
        <h1 className="error-title"> Welcome Home</h1>
        <p className="error-subtitle">Where you can find inspiration for your next masterpiece!</p>
        <br />
        <Link to="/challenges"> <img className="taxi" src="../assets/images/taxi.jpeg"/> </Link>
      </div>
    </div>
  );
};

export default Home;
