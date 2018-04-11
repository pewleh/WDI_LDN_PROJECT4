import React from 'react';

const Counter = ({ artwork, like }) => {

  return (
    <div className="container">
      <div className="counter">
        <h1 className="likes">{artwork.likes.length} likes!</h1>
        <button className="btn" onClick={like}>I like this!</button>
      </div>
    </div>
  );

};

export default Counter;
