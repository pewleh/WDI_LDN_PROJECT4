import React from 'react';

import { Link } from 'react-router-dom';


const NotFound = () => {
  return(
    <div className="container">
      <div className="central-container">
        <h1 className="central-title"> Error 404: The page you&apos;re looking for cannot be found. </h1>
        <p className="central-subtitle">We&apos;ve sent out a search party but if you&apos;re still feeling lost, click the taxi to take you home.</p>
        <br />
        <Link to="/challenges"> <img className="taxi" src="../assets/images/taxi.jpeg"/> </Link>
      </div>
    </div>
  );
};

export default NotFound;
