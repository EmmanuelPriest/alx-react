import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';

const Notifications = ({ displayDrawer }) => {
  const htmlObj = {
    __html: '<strong>Urgent requirement</strong> - complete by EOD'
  };
  return (
    <>
      <div className='menuItem'>Your notifications</div>
      <div className='Notifications' style={{ display: displayDrawer ? 'block' : 'none' }}>
        <p>Here are the notifications</p>
        <ul>
          <NotificationItem type='default' value='New course available' />
          <NotificationItem type='urgent' value='New resume available' />
          <NotificationItem type='urgent' html={htmlObj} />
        </ul>
      </div>
    </>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
