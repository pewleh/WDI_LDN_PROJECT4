import React from 'react';

import { Link } from 'react-router-dom';


const Home = () => {
  return(
    <div className="container">
      <div className="central-container">
        <h1 className="central-title"> Welcome Home</h1>
        <p className="central-subtitle">Find the inspiration for your next masterpiece!</p>
        <br />
        <Link to="/challenges"> <img className="logo" src="../assets/images/logo.jpeg"/> </Link>
      </div>
    </div>
  );
};

export default Home;
