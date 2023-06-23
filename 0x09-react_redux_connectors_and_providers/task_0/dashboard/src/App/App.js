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
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      listNotifications: listNotifications,
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logOut = this.logOut.bind(this);
    this.logIn = this.logIn.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

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

  const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.ui.isLoggedIn,
  };
};

  markNotificationAsRead(id) {
    const updatedNotifications = this.state.listNotifications.filter((notif) => notif.id !== id);
    this.setState({ listNotifications: updatedNotifications });
  }

  render() {
    const { displayDrawer, user, listNotifications } = this.state;

    return (
      <AppContext.Provider value={{ user: user, logOut: this.logOut, logIn: this.logIn }}>
        <Notifications
          listNotifications={listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
          markNotificationAsRead={this.markNotificationAsRead}
        />
        <div className={css(styles.body)}>
          <Header />
        </div>
        <BodySectionWithMarginBottom title="Course list">
          {user.isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
        </BodySectionWithMarginBottom>
        <Footer className={css(styles.footer)} />
      </AppContext.Provider>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
  logIn: PropTypes.func,
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
  listNotifications: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({ __html: PropTypes.string }),
  })),
};

export default App;
