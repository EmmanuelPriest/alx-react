import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import holbertonLogo from '../assets/holberton-logo.jpg';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    borderBottom: '3px solid #e1354b',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 1rem',
  },
  headerLogo: {
    width: '10rem',
  },
  headerTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
});

function Header() {
  return (
    <header className={css(styles.header)}>
      <div>
        <img
          className={css(styles.headerLogo)}
          src={holbertonLogo}
          alt="Holberton Logo"
        />
      </div>
      <h1 className={css(styles.headerTitle)}>School dashboard</h1>
    </header>
  );
}

export default Header;
