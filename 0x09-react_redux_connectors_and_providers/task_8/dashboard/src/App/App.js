import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { AppContext } from '../App/AppContext';
import { connect } from 'react-redux';
import { displayNotificationDrawer, hideNotificationDrawer, loginRequest } from '../actions/uiActionCreators';

const styles = StyleSheet.create({
  body: {
    fontFamily: ['Arial', 'Helvetica', 'sans-serif'],
    backgroundColor: '#f5f5f5',
    padding: '0px',
    margin: '0px',
  },
  footer: {
    position: 'fixed',
    bottom: '0px',
    width: '100%',
    textAlign: 'center',
    fontStyle: 'italic',
    borderTop: '3px solid #FF0000',
    backgroundColor: '#FFFFFF',
    padding: '2rem 0',
  },
});

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

const App = ({ user, isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer, loginRequest }) => {
  const logOut = () => {
    // Dispatch the action to logout
    // Clear the user data in the state
    dispatch(logoutAction());
    dispatch(clearUserDataAction());
  };

  const logIn = (email, password) => {
    // Dispatch the action to login
    // Pass the email and password to the action creator
    dispatch(loginRequest(email, password));
  };

  return (
    <AppContext.Provider value={{ user: user, logOut: logOut, logIn: logIn }}>
      <Notifications displayDrawer={displayDrawer} handleDisplayDrawer={displayNotificationDrawer} handleHideDrawer={hideNotificationDrawer} />
      <div className={css(styles.body)}>
        <Header />
      </div>
      <BodySectionWithMarginBottom title="Course list">
        {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login login={loginRequest} />}
      </BodySectionWithMarginBottom>
      <Footer className={css(styles.footer)} />
    </AppContext.Provider>
  );
};

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.ui.isLoggedIn,
    displayDrawer: state.isNotificationDrawerVisible,
  };
};

App.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
    isLoggedIn: PropTypes.bool,
  }),
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired,
  loginRequest: PropTypes.func.isRequired,
};

App.defaultProps = {
  user: null,
  isLoggedIn: false,
  displayDrawer: false,
};

export default connect(mapStateToProps, { displayNotificationDrawer, hideNotificationDrawer, loginRequest })(App);
