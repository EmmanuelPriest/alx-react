import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
  item: {
    width: '100%',
    padding: '10px 8px',
    fontSize: '20px',
    borderBottom: '1px solid black',
    '@media (max-width: 900px)': {
      width: '100%',
      position: 'absolute',
    },
  }
});

class NotificationItem extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { markAsRead, id } = this.props;
    console.log(`Notification ${id} has been marked as read`);
    markAsRead(id);
  }

  render() {
    const { type, value, html } = this.props;
    return (
      <li
        data-notification-type={type}
        className={css(
          styles.item,
          type === 'urgent' ? styles.urgent : styles.default
        )}
        dangerouslySetInnerHTML={html}
        onClick={this.handleClick}
      >
        {value}
      </li>
    );
  }
}
