import React from 'react';
import { getLatestNotification } from '../utils/utils';
import icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import './Notifications.css';

function Notifications() {
  return (
    <div className="Notifications">
      <button style={{ position: 'absolute', right: '0' }} aria-label="Close" onClick={() => console.log('Close button has been clicked')}>
        <img src={icon} alt="close icon" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem html={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}

export default Notifications;
