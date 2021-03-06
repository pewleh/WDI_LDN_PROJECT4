import React from 'react';

const media = {
  'acrylic': 'Acrylics',
  'charcoal': 'Charcoal',
  'chalk': 'Chalk',
  'digital': 'Digital',
  'ink': 'Ink',
  'mixed-media': 'Mixed Media',
  'oil': 'Oil',
  'pencil': 'Pencil',
  'pastel': 'Pastel',
  'watercolour': 'Watercolour',
  'spray-paint': 'Spray Paint'
};

const Form = ({handleSubmit, handleChange, handleMediaSelect, data}) => {
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
        {data.errors.name && <small>{data.errors.name}</small>}
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
        {data.errors.image && <small>{data.errors.image}</small>}
      </div>
      <div className="field">
        <label htmlFor="name">Description</label>
        <textarea
          className="input description-input"
          placeholder="Description"
          name="description"
          onChange={handleChange}
          value={data.description}
        />
        {data.errors.description && <small>{data.errors.description}</small>}
      </div>
      <div className="medium-controls">
        <div className="field">
          <label htmlFor="name">First Medium</label>
          <div className="control">
            <div className="select">
              <select value={data.media[0]} name="media" onChange={(e) =>
                handleMediaSelect(e.target.value, 0)}>
                <option disabled value="">Please choose</option>
                {Object.keys(media).map(medium =>
                  <option key={medium} value={medium}>{media[medium]}</option>
                )}
              </select>
            </div>
          </div>
        </div>
        {data.errors.control && <small>{data.errors.control}</small>}
        <div className="field">
          <label htmlFor="name">Second Medium</label>
          <div className="control">
            <div className="select">
              <select value={data.media[1]} name="media" onChange={(e) =>
                handleMediaSelect(e.target.value, 1)}>
                <option disabled value="">Please choose</option>
                <option value="none">None</option>
                {Object.keys(media).map(medium =>
                  <option key={medium} value={medium}>{media[medium]}</option>
                )}
              </select>
            </div>
          </div>
        </div>
        {data.errors.control && <small>{data.errors.control}</small>}

        <div className="field">
          <label htmlFor="name">Third Medium</label>
          <div className="control">
            <div className="select">
              <select value={data.media[2]} name="media" onChange={(e) =>
                handleMediaSelect(e.target.value, 2)}>
                <option disabled value="">Please choose</option>
                <option value="none">None</option>
                {Object.keys(media).map(medium =>
                  <option key={medium} value={medium}>{media[medium]}</option>
                )}
              </select>
            </div>
          </div>
        </div>
      </div>
      {data.errors.control && <small>{data.errors.control}</small>}



      <button className="button">Submit</button>
    </form>
  );
};

export default Form;
