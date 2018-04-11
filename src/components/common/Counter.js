import React from 'react';

const Counter = ({ artwork, like }) => {

  return (
    <div className="container">
      <div className="counter">
        <h1>{artwork.likes.length}</h1>
        <button className="btn" onClick={like}>I like this!</button>
      </div>
    </div>
  );

};

export default Counter;
