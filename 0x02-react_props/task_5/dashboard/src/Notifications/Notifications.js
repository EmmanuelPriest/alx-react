import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

const Notifications = ({ listNotifications }) => {
  const emptyList = <p>No new notification for now</p>;

  return (
    <div>
      <ul>
        {listNotifications.length === 0 ? (
          emptyList
        ) : (
          listNotifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              type={notification.type}
              value={notification.value}
              html={notification.html}
            />
          ))
        )}
      </ul>
    </div>
  );
};

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  listNotifications: [],
};

export default Notifications;
