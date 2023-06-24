import React, { Component } from 'react';
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
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';

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

class App extends Component {
  logOut() {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
    });
  }

  logIn(email, password) {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true,
      },
    });
  }

  markNotificationAsRead(id) {
    const updatedNotifications = this.props.listNotifications.filter((notif) => notif.id !== id);
    // Update the notifications using the action creator
    this.props.markNotificationAsRead(updatedNotifications);
  }

  render() {
    const { user } = this.props;
    const { isLoggedIn, displayDrawer } = this.props;

    return (
      <AppContext.Provider value={{ user: user, logOut: this.logOut, logIn: this.logIn }}>
        <Notifications
          listNotifications={this.props.listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.props.displayNotificationDrawer}
          handleHideDrawer={this.props.hideNotificationDrawer}
          markNotificationAsRead={this.markNotificationAsRead}
        />
        <div className={css(styles.body)}>
          <Header />
        </div>
        <BodySectionWithMarginBottom title="Course list">
          {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
        </BodySectionWithMarginBottom>
        <Footer className={css(styles.footer)} />
      </AppContext.Provider>
    );
  }
}

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
  markNotificationAsRead: PropTypes.func.isRequired,
};

App.defaultProps = {
  user: null,
  isLoggedIn: false,
  displayDrawer: false,
  listNotifications: [],
};

export default connect(mapStateToProps, { displayNotificationDrawer, hideNotificationDrawer })(App);
