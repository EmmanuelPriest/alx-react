import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import holbertonLogo from '../assets/holberton-logo.jpg';
import { connect } from 'react-redux';
import { logout } from '../actions/authActionCreators';

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

const Header = ({ isLoggedIn, user, logout }) => {
  const handleLogout = () => {
    logout();
  };

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
            onClick={handleLogout}
          >
            Welcome {user.email} (logout)
          </div>
        )}
      </header>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    user: state.user,
  };
};

export default connect(mapStateToProps, { logout })(Header);
