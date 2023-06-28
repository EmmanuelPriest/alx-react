import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, css, keyframes } from 'aphrodite';
import NotificationItem from './NotificationItem';
import closeIcon from '../assets/close-icon.png';
import {
  getUnreadNotificationsByType,
  markNotificationAsRead,
  setNotificationFilter,
} from '../actions/notificationActionCreators';

const styles = StyleSheet.create({
  Notifications: {
    border: '2px dotted #f5f5f5',
    padding: '1rem',
    marginBottom: '0.5rem',
    '@media (max-width: 900px)': {
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      margin: 0,
      padding: 0,
    },
    fontSize: '20px',
    float: 'right',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    ':hover': {
      animationName: [bounce, fade],
      animationDuration: '0.5s, 1s',
      animationIterationCount: '3, 1',
      animationFillMode: 'forwards',
    },
  },
  ul: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
});

const bounce = keyframes({
  '0%': {
    transform: 'translateY(0px)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '100%': {
    transform: 'translateY(5px)',
  },
});

const fade = keyframes({
  '0%': {
    opacity: 0.5,
  },
  '100%': {
    opacity: 1,
  },
});

const Notifications = ({
  displayDrawer,
  notifications,
  handleDisplayDrawer,
  handleHideDrawer,
  markAsRead,
  setNotificationFilter,
}) => {
  React.useEffect(() => {
    fetchNotifications();
  }, []);

  const markNotificationAsRead = (id) => {
    markAsRead(id);
  };

  const setFilterToDefault = () => {
    setNotificationFilter('default');
  };

  const setFilterToUrgent = () => {
    setNotificationFilter('urgent');
  };

  return (
    <>
      <div
        className={css(styles.Notifications)}
        onClick={handleDisplayDrawer}
        style={{ display: displayDrawer ? 'none' : 'block' }}
      >
        <p>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className={css(styles.Notifications)}>
          <button
            onClick={handleHideDrawer}
            style={{
              background: 'transparent',
              border: 'none',
              position: 'absolute',
              right: 20,
            }}
            aria-label="close"
          >
            <img src={closeIcon} alt="close-icon" />
          </button>
          <p>Here is the list of notifications</p>
          <div>
            <button
              onClick={() => this.setFilterToUrgent()}
              data-testid="urgent-button"
            >
              {'‼️'}
            </button>
            <button
              onClick={() => this.setFilterToDefault()}
              data-testid="default-button"
            >
              {'💠'}
            </button>
          </div>
          <ul className={css(styles.ul)}>
            {notifications.length === 0 && <NotificationItem value="No new notification for now" />}
            {notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                type={notification.type}
                value={notification.value}
                html={notification.html}
                markNotificationAsRead={() => markNotificationAsRead(notification.id)}
                id={notification.id}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

Notifications.defaultProps = {
  displayDrawer: false,
  notifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markAsRead: () => {},
  setNotificationFilter: () => {},
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string,
      html: PropTypes.shape({
        __html: PropTypes.string,
      }),
    })
  ),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markAsRead: PropTypes.func,
  setNotificationFilter: PropTypes.func,
};

const mapStateToProps = (state) => ({
  notifications: getUnreadNotificationsByType(state),
});

const mapDispatchToProps = {
  markAsRead: markNotificationAsRead,
  setNotificationFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
