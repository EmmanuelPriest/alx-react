import React from 'react';
import './App.css';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import NotificationItemShape from '../Notifications/NotificationItemShape';

function App({ listNotifications }) {
  return (
    <div className="App">
      <header className="App-header">
        <Notifications listNotifications={listNotifications} />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <CourseList listCourses={[]} />
      </div>
    </div>
  );
}

App.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

App.defaultProps = {
  listNotifications: []
};

export default App;
