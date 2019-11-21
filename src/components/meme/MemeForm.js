import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Meme from './Meme';

const MemeForm = ({ handleSubmit }) => {
  const [topText, setTop] = useState('');
  const [bottomText, setBottom] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  return (
    <>
      <form onSubmit={event => handleSubmit(event, topText, bottomText, imageUrl)}>
        <input type="text" value={topText} onChange={({ target }) => setTop(target.value)} />
        <input type="text" value={imageUrl} onChange={({ target }) => setImageUrl(target.value)} />
        <input type="text" value={bottomText} onChange={({ target }) => setBottom(target.value)} />
        <button>Make it a Meme</button>
      </form>
      <Meme topText={topText} bottomText={bottomText} imageUrl={imageUrl} />
    </>
  );
};

MemeForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default MemeForm;
