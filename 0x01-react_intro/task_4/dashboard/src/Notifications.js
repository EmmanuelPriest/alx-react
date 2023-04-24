import React from 'react';
import { getLatestNotification } from './utils';
import icon from './close-icon.png';

function Notify() {
  return (
    <div className="Notifications">
      <button style={{ position: 'absolute', right: '0' }} aria-label="Close" onClick={() => console.log('Close button has been clicked')}>
        <img src={icon} alt="close icon" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}

export default Notify;
