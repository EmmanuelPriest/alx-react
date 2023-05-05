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
      <li data-notification-type={type} className={css(type === 'urgent' ? styles.urgent : styles.default)} dangerouslySetInnerHTML={html} onClick={this.handleClick}>
        {value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired
  }),
  markAsRead: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

NotificationItem.defaultProps = {
  value: '',
};

export default NotificationItem;
