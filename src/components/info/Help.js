import React from 'react';


const Help = () => {
  return(
    <div className="container">
      <section className="help-container">
        <h1 className="title">How it all works</h1>
        <p className="about-header">SketchBook creates weekly challenges to push you, the artist,
          out of your standard comfort zone. Explore new mediums and develop on
          the styles youre all too familiar with. </p> <br />
        <section className="1">
          {/* image tag  */}
          <p>To get started, make your to the {/*add a link for convinience.*/} challenge page to reveal the current weeks challenge. All challenges begin and end on the first day of the week (Monday).</p>
        </section><br />
        <section className="2">
          {/* imaaaage */}
          <p>Follow the directions given below the image and using the medium of your choice, or the one instructed by the task, create a piece that youre happy with and submit it directly to us. {/* Consider using filestack to let users upload images if not -> */} (Youll need to use the link address).</p>
        </section>
        <section className="3">
          {/* imaaaage */}
          <p>Once youve completed submissions, your work of art will be uploaded both to the gallery and your own profile( to help you keep track!).</p>
        </section>
      </section>
    </div>
  );
};

export default Help;
