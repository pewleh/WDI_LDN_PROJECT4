import React from 'react';

import { Link } from 'react-router-dom';
const Help = () => {
  return(
    <div className="container">
      <section className="help-container">
        <h1 className="title">How it all works</h1>
        <p className="about-header">SketchBook creates weekly challenges to push you, the artist,
          out of your standard comfort zone. Explore new mediums and develop on
          the styles you&apos;re all too familiar with. </p> <br />
        <section className="1">
          <img className="help-image" src="../assets/images/1.png"/>
          <p>To get started, make your way to the <Link to='/challenges'>challenge</Link>  page to reveal the current week&apos;s challenge. All challenges begin and end on the first day of the week (Monday).</p>
        </section><br />
        <section className="2">
          <img className="help-image" src="../assets/images/2.png"/>
          <p>Follow the directions given below the image and using the medium of your choice, or the one instructed by the task, create a piece that you&apos;re happy with and submit it directly to us. {/* Consider using filestack to let users upload images if not -> */} (Youll need to use the link address).</p>
        </section>
        <section className="3">
          <img className="help-image" src="../assets/images/3.png"/>
          <p>Once you&apos;ve completed submissions, your work of art will be uploaded both to the gallery and your own profile( to help you keep track!).</p>
          <img className="help-image" src="../assets/images/4.png"/>
          <p>Still havin trouble? We&apos;ve all been there. That&apos;s why we have a 24 hour support team to help you through. <br/> Contact us as at <br /> 0208 - not really - 3234<br /> or <br/> Sketch-book@notaREALaddress.com</p>

        </section>
      </section>
    </div>
  );
};

export default Help;
