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

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
];

const App = ({ user, isLoggedIn, displayDrawer, listNotifications, displayNotificationDrawer, hideNotificationDrawer, loginRequest }) => {
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

  const markNotificationAsRead = (id) => {
    // Filter the notifications to remove the one with the given id
    const updatedNotifications = listNotifications.filter((notif) => notif.id !== id);
    // Dispatch the action to update the notifications
    dispatch(updateNotificationsAction(updatedNotifications));
  };

  return (
    <AppContext.Provider value={{ user: user, logOut: logOut, logIn: logIn }}>
      <Notifications
        listNotifications={listNotifications}
        displayDrawer={displayDrawer}
        handleDisplayDrawer={displayNotificationDrawer}
        handleHideDrawer={hideNotificationDrawer}
        markNotificationAsRead={markNotificationAsRead}
      />
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
    listNotifications: state.notifications,
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
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.string,
      value: PropTypes.string,
      html: PropTypes.shape({ __html: PropTypes.string }),
    })
  ),
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired,
  loginRequest: PropTypes.func.isRequired,
};

App.defaultProps = {
  user: null,
  isLoggedIn: false,
  displayDrawer: false,
  listNotifications: [],
};

export default connect(mapStateToProps, { displayNotificationDrawer, hideNotificationDrawer, loginRequest })(App);
