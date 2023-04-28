import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.state = {
      isLoggedIn: props.isLoggedIn || false,
      displayDrawer: false,
    };
  }

  handleLogout() {
    this.setState({ isLoggedIn: false });
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  render() {
    const { isLoggedIn, displayDrawer } = this.state;

    return (
      <>
        <Notifications displayDrawer={displayDrawer} handleDisplayDrawer={this.handleDisplayDrawer} handleHideDrawer={this.handleHideDrawer} />
        <div className='App'>
          <Header />
          <div className='App-body'>
            {isLoggedIn ? (
              <CourseList />
            ) : (
              <Login />
            )}
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
}

export default App;
