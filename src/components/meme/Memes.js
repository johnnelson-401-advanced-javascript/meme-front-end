import React from 'react';
import PropTypes from 'prop-types';
import Meme from './Meme';
import styles from './Memes.css';

const Memes = ({ memes }) => {
  const memeElements = memes.map(meme => (
    <Meme key={`${meme.topText}-${meme.imageUrl}-${meme.bottomText}`} {...meme} />
  ));

  return (
    <section className={styles.Memes}>
      {memeElements}
    </section>
  );
};

Memes.propTypes = {
  memes: PropTypes.arrayOf(PropTypes.shape({
    topText: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    bottomText: PropTypes.string
  })).isRequired
};

export default Memes;
