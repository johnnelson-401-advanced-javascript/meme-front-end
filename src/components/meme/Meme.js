import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';
import styles from './Meme.css';

const Meme = ({ topText, imageUrl, bottomText }) => {
  const ref = useRef();

  const handleClick = () => {
    domToImage.toPng(ref.current)
      .then(image => {
        return fileSaver.saveAs(image, 'meme.png');
      });
  };
  return (
    <section className={styles.Meme} ref={ref} onClick={handleClick}>
      <h2>{topText}</h2>
      <img src={imageUrl} alt={topText, bottomText} />
      <h2>{bottomText}</h2>
    </section>
  );
};

Meme.propTypes = {
  topText: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  bottomText: PropTypes.string
};

export default Meme;
