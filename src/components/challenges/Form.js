import React from 'react';

const Form = ({handleSubmit, handleChange, handleMediaSelect, data}) => {
  console.log(data.media);
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Challenge Name</label>
        <input
          className="input"
          placeholder="Challenge Name"
          name="name"
          onChange={handleChange}
          value={data.name}
        />
      </div>
      <div className="field">
        <label htmlFor="name">Image</label>
        <input
          className="input"
          placeholder="Use a http link here!"
          name="image"
          onChange={handleChange}
          value={data.image}
        />
      </div>
      <div className="field">
        <label htmlFor="name">Description</label>
        <input
          className="input description-input"
          placeholder="Description"
          name="description"
          onChange={handleChange}
          value={data.description}
        />
      </div>
      <div className="medium-controls">
        <div className="field">
          <label htmlFor="name">First Medium</label>
          <div className="control">
            <div className="select">
              <select value={data.media[0]} name="media"onChange={(e) => handleMediaSelect(e.target.value, 0)}>
                <option selected disabled value="">Please choose</option>
                <option value="acrylic">Acrylics</option>
                <option value="charcoal">Charcoal</option>
                <option value="chalk">Chalk</option>
                <option value="digital">Digital</option>
                <option value="ink">Ink</option>
                <option value="mixed-media">Mixed Media</option>
                <option value="oil">Oils</option>
                <option value="pencil">Pencil</option>
                <option value="pastel">Pastel</option>
                <option value="watercolour">Watercolour</option>
                <option value="spray-paint">Spray Paint</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label htmlFor="name">Second Medium</label>
          <div className="control">
            <div className="select">
              <select value={data.media[1]} name="media"onChange={(e) => handleMediaSelect(e.target.value, 1)}>
                <option selected disabled value="">Please choose</option>
                <option value="none">None</option>
                <option value="acrylic">Acrylics</option>
                <option value="charcoal">Charcoal</option>
                <option value="chalk">Chalk</option>
                <option value="digital">Digital</option>
                <option value="ink">Ink</option>
                <option value="mixed-media">Mixed Media</option>
                <option value="oil">Oils</option>
                <option value="pencil">Pencil</option>
                <option value="pastel">Pastel</option>
                <option value="watercolour">Watercolour</option>
                <option value="spray-paint">Spray Paint</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label htmlFor="name">Third Medium</label>
          <div className="control">
            <div className="select">
              <select value={data.media[2]} name="media"onChange={(e) => handleMediaSelect(e.target.value, 2)}>
                <option selected disabled value="">Please choose</option>
                <option value="none">None</option>
                <option value="acrylic">Acrylics</option>
                <option value="charcoal">Charcoal</option>
                <option value="chalk">Chalk</option>
                <option value="digital">Digital</option>
                <option value="ink">Ink</option>
                <option value="mixed-media">Mixed Media</option>
                <option value="oil">Oils</option>
                <option value="pencil">Pencil</option>
                <option value="pastel">Pastel</option>
                <option value="watercolour">Watercolour</option>
                <option value="spray-paint">Spray Paint</option>
              </select>
            </div>
          </div>
        </div>
      </div>


      <button className="button">Submit</button>
    </form>
  );
};

export default Form;
