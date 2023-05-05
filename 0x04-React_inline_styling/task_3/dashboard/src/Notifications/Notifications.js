import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import closeIcon from '../assets/close-icon.png';
import { StyleSheet, css } from 'aphrodite';

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
  },
  ul: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
});

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    const { listNotifications } = this.props;
    return nextProps.listNotifications.length > listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <>
        <div className={css(styles.Notifications)}>
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(styles.Notifications)}>
            <button
              style={{
                background: 'transparent',
                border: 'none',
                position: 'absolute',
                right: 20,
              }}
              aria-label='close'
            >
              <img src={closeIcon} alt='close-icon' />
            </button>
            <p>Here is the list of notifications</p>
            <ul className={css(styles.ul)}>
              {listNotifications.length === 0 && (
                <NotificationItem value='No new notification for now' />
              )}

              {listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markAsRead={this.markAsRead}
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
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
