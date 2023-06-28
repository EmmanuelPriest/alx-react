import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import closeIcon from '../assets/close-icon.png';
import { StyleSheet, css, keyframes } from 'aphrodite';

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

class Notifications extends PureComponent {
  componentDidMount() {
    this.props.fetchNotifications();
  }

  markNotificationAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer } = this.props;
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
            <ul className={css(styles.ul)}>
              {listNotifications.length === 0 && (
                <NotificationItem value="No new notification for now" />
              )}
              {listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markNotificationAsRead={() => this.markNotificationAsRead(notification.id)}
                  id={notification.id}
                />
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(
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
  markNotificationAsRead: PropTypes.func,
};

export default Notifications;
