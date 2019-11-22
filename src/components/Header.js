import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = () => (
  <header className={styles.Header}>
    <nav>
      <Link to="/memes"> My Memes </Link>
      <Link to="/"> Create Meme </Link>
    </nav>
    <p>Clicking Directly on a Meme will Save it Locally</p>
  </header>
);

export default Header;
