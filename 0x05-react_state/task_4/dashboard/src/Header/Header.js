import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import holbertonLogo from '../assets/holberton-logo.jpg';
import { AppContext } from '../App/AppContext';

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
  logoutSection: {
    fontWeight: 'bold',
    cursor: 'pointer',
  },
});

class Header extends Component {
  static contextType = AppContext;

  handleLogout = () => {
    this.context.logOut();
  };

  render() {
    const { isLoggedIn, user } = this.context;

    return (
      <>
        <header className={css(styles.header)}>
          <div>
            <img
              className={css(styles.headerLogo)}
              src={holbertonLogo}
              alt="Holberton Logo"
            />
          </div>
          <h1 className={css(styles.headerTitle)}>School dashboard</h1>
          {isLoggedIn && (
            <div
              id="logoutSection"
              className={css(styles.logoutSection)}
              onClick={this.handleLogout}
            >
              Welcome {user.email} (logout)
            </div>
          )}
        </header>
      </>
    );
  }
}

export default Header;
