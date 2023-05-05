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
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <div className={css(styles.body)}>
          <Header />
        </div>
        <BodySectionWithMarginBottom title="Course list">
          {!isLoggedIn ? <Login /> : <CourseList listCourses={listCourses} />}
        </BodySectionWithMarginBottom>
        <BodySectionWithMarginBottom title="Log in to continue">
          {!isLoggedIn ? <Login /> : null}
        </BodySectionWithMarginBottom>
        <BodySection title="News from the School">
          <p>
            We are glad to announce to you that in the coming days the School is going to add some new interesting and
            exciting courses to the ones already on ground.
          </p>
        </BodySection>
        <div className={css(styles.footer)}>
          <Footer />
        </div>
      </>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;
